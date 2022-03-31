import React from 'react';
import { Text, View } from 'react-native';
import Banner from '../Atoms/Banner';
import StarWarsCharacters from '../Templates/StarWarsCharacters';

const Home = () => {
  return (
    <View>
      <Banner />
      <StarWarsCharacters />
    </View>
  );
};
export default Home;
