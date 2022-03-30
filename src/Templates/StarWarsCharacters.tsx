import { Text, View } from 'react-native';
import useSWAPI from '../../Hooks/useSWAPI';
import { Button } from 'react-native-paper';
import CharactersList from '../Organisms/CharactersList';
import Search from '../Atoms/Search';

const StarWarsCharacters = () => {
  const { characters, pagination, isLoading, newRequest, searchCharacter } = useSWAPI();
  console.log(characters);
  return (
    <View>
      <Search onChange={searchCharacter}/>
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
