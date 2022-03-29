import { Text, View } from 'react-native';
import useSWAPI from '../../Hooks/useSWAPI';

const StarWarsCharacters = () => {
  const { characters, pagination, isLoading } = useSWAPI();
  console.log(characters);
  return (
    <View>
      <Text>StarWarsCharacters</Text>
      {characters.map((character: { name: String }) => {
        return <Text>{character.name}</Text>;
      })}
    </View>
  );
};

export default StarWarsCharacters;
