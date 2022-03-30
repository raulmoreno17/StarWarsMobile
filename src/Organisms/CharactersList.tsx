import { DataTable } from 'react-native-paper';
import Progress from '../Atoms/Progress';

interface charactersData {
  characters: [];
  isLoading: Boolean;
  pagination: { count: number, currentPage: number };
  onPageChanged: Function;
  //onClick: (e: React.MouseEvent) => void,
}

const CharactersList = (props: charactersData) => {
  const { characters, isLoading, pagination, onPageChanged } = props;
  const numberOfPages = Math.round(pagination.count / 10);
  const paginationLabel = `${pagination.currentPage + 1} of ${numberOfPages}`;
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Characters List</DataTable.Title>
      </DataTable.Header>

      {isLoading && <Progress />}

      {characters.map((character: { name: String; url: String }) => {
        return (
          <DataTable.Row key={character.url}>
            <DataTable.Cell>{character.name}</DataTable.Cell>
          </DataTable.Row>
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

export default CharactersList;
