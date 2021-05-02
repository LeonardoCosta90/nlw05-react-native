import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fonts } from '../styles/fonts';
import { colors } from '../styles/colors';

import { Load } from '../components/Load';
import { Header } from '../components/Header';
import { EnvironmentButton } from '../components/EnvironmentButton';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

import { api } from '../services/api';

type Environment = {
  key: string;
  title: string;
};

type Plant = {
  id: number;
  name: string;
  photo: string;
  environments: string[];
};

export function PlantSelect() {
  const flatListRef = useRef<FlatList>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [plantsCurrentPage, setPlantsCurrentPage] = useState(1);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [isPlantsLoadingMore, setIsPlantsLoadingMore] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState('all');

  function handleSelectEnvironment(key: string, index: number) {
    setSelectedEnvironment(key);

    if (flatListRef.current) flatListRef.current.scrollToIndex({ index });

    if (key === 'all') {
      setFilteredPlants(plants);
      return;
    }

    const filtered = plants.filter(plant => plant.environments.includes(key));

    setFilteredPlants(filtered);
  }

  async function loadEnvironment() {
    const { data } = await api.get('plants_environments', {
      params: {
        _sort: 'title',
        _order: 'asc',
      },
    });

    setEnvironments([{ key: 'all', title: 'Todos' }, ...data]);
  }

  async function loadPlants() {
    const { data } = await api.get<Plant[]>('plants', {
      params: {
        _sort: 'name',
        _order: 'asc',
        _page: plantsCurrentPage,
        _limit: 8,
      },
    });

    if (plantsCurrentPage > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
      setIsPlantsLoadingMore(false);
      return data;
    }

    setPlants(data);
    setFilteredPlants(data);
    return data;
  }

  async function loadMorePlants(listDistance: number) {
    if (listDistance < 1) return;

    setIsPlantsLoadingMore(true);
    setPlantsCurrentPage(plantsCurrentPage + 1);
  }

  useEffect(() => {
    if (plantsCurrentPage !== 1) loadPlants();
  }, [plantsCurrentPage]);

  useEffect(() => {
    Promise.all([loadEnvironment(), loadPlants()]).then(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={{ paddingHorizontal: 32 }}>
          <Text style={styles.title}>Em qual ambiente</Text>
          <Text style={styles.subTitle}>você quer colocar sua planta?</Text>
        </View>

        <View>
          <FlatList<Environment>
            ref={flatListRef}
            horizontal
            data={environments}
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.environmentContainerList}
            ListFooterComponent={<View style={{ width: 32 }} />}
            ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
            ListEmptyComponent={
              isLoading
                ? () => <EnvironmentButton title="Carregando..." isSelected={false} />
                : null
            }
            renderItem={({ item, index }) => (
              <EnvironmentButton
                title={item.title}
                isSelected={item.key === selectedEnvironment}
                onPress={() => handleSelectEnvironment(item.key, index)}
              />
            )}
          />
        </View>

        {isLoading ? (
          <View style={styles.loadContainer}>
            <Load />
          </View>
        ) : (
          <View style={{ flex: 1, marginTop: 40 }}>
            <FlatList
              data={filteredPlants}
              numColumns={2}
              onEndReachedThreshold={0.1}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => String(item.id)}
              contentContainerStyle={styles.plantsContainerList}
              columnWrapperStyle={{ paddingBottom: 16, justifyContent: 'space-evenly' }}
              onEndReached={({ distanceFromEnd }) => loadMorePlants(distanceFromEnd)}
              ListFooterComponent={
                isPlantsLoadingMore ? <ActivityIndicator color={colors.green} /> : null
              }
              renderItem={({ item }) => (
                <PlantCardPrimary title={item.name} imageURL={item.photo} />
              )}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: colors.white,
  },

  content: {
    flex: 1,
    paddingTop: 40,
  },

  title: {
    fontSize: 17,
    color: colors.body_dark,
    fontFamily: fonts.medium,
  },

  subTitle: {
    fontSize: 17,
    color: colors.body_dark,
    fontFamily: fonts.text,
  },

  environmentContainerList: {
    marginTop: 24,
    marginLeft: 32,
    paddingRight: 32,
  },

  loadContainer: {
    flex: 1,
    paddingBottom: 32,
    justifyContent: 'center',
  },

  plantsContainerList: {
    paddingHorizontal: 32,
    paddingBottom: 16,
  },
});
