import { Pressable, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import Progress from '../Atoms/Progress';
import { useNavigation } from '@react-navigation/native';
import React, { Key } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

interface charactersData {
  characters: [];
  isLoading: Boolean;
  pagination: {
    count: number;
    currentPage: number;
    numberOfPages: number;
    paginationLabel: string;
  };
  onPageChanged: (page: number) => void;
}

const CharactersList: React.FC<charactersData> = ({
  characters,
  isLoading,
  pagination,
  onPageChanged,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title style={styles.container}>Characters List</DataTable.Title>
      </DataTable.Header>

      {isLoading && <Progress />}

      {characters.map((character: { name: String; url: Key }) => {
        return (
          <Pressable
            onPress={() => navigation.navigate('CharacterDetail', character)}
            key={character.url}
          >
            <DataTable.Row>
              <DataTable.Cell style={styles.container}>{character.name}</DataTable.Cell>
            </DataTable.Row>
          </Pressable>
        );
      })}

      <DataTable.Pagination
        page={pagination.currentPage}
        numberOfPages={pagination.numberOfPages}
        onPageChange={onPageChanged}
        label={pagination.paginationLabel}
      />
    </DataTable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default CharactersList;
