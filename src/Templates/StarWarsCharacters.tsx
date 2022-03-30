import { Text, View } from 'react-native';
import useSWAPI from '../../Hooks/useSWAPI';
import { Button } from 'react-native-paper';
import CharactersList from '../Organisms/CharactersList';

const StarWarsCharacters = () => {
  const { characters, pagination, isLoading, newRequest } = useSWAPI();
  console.log(characters);
  return (
    <View>
      <CharactersList
        characters={characters}
        pagination={pagination}
        isLoading={isLoading}
        onPageChanged={newRequest}
      />
    </View>
  );
};

export default StarWarsCharacters;
