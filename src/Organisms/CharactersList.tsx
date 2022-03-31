import { Pressable, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import Progress from '../Atoms/Progress';
import { useNavigation } from '@react-navigation/native';

interface charactersData {
  characters: [];
  isLoading: Boolean;
  pagination: { count: number; currentPage: number };
  onPageChanged: Function;
  //onClick: (e: React.MouseEvent) => void,
}

const CharactersList = (props: charactersData) => {
  const { characters, isLoading, pagination, onPageChanged } = props;
  const numberOfPages = Math.round(pagination.count / 10);
  const paginationLabel = `${pagination.currentPage + 1} of ${numberOfPages}`;
  const navigation = useNavigation();

  const pressHandler = (character: {}) => {
    navigation.navigate('CharacterDetail', character);
  };
  return (
    <DataTable >
      <DataTable.Header>
        <DataTable.Title style={styles.container}>Characters List</DataTable.Title>
      </DataTable.Header>

      {isLoading && <Progress />}

      {characters.map((character: { name: String; url: String }) => {
        return (
          <Pressable onPress={()=>pressHandler(character)} key={character.url}>
            <DataTable.Row>
              <DataTable.Cell style={styles.container}>{character.name}</DataTable.Cell>
            </DataTable.Row>
          </Pressable>
        );
      })}

      <DataTable.Pagination
        page={pagination.currentPage}
        numberOfPages={numberOfPages}
        onPageChange={onPageChanged}
        label={paginationLabel}
      />
    </DataTable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  }
});

export default CharactersList;
