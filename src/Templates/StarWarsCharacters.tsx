import { View } from 'react-native';
import useSWAPI from '../Hooks/useSWAPI';
import CharactersList from '../Organisms/CharactersList';
import Search from '../Atoms/Search';
import React from 'react';

const StarWarsCharacters = () => {
  const { characters, pagination, isLoading, newRequest, searchCharacter, searchQuery } = useSWAPI();
  return (
    <View>
      <Search onChange={searchCharacter} searchValue={searchQuery} placeholder={"Who are you looking for?"}/>
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
