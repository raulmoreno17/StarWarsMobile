import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { List, Headline } from 'react-native-paper';
import React from 'react';
import { RouteProp } from '@react-navigation/native';

const CharacterDetail = () => {
  const route: RouteProp<
    {
      params: {
        name: string;
        birth_year: string;
        eye_color: string;
        gender: string;
        hair_color: string;
        height: string;
        mass: string;
        skin_color: string;
      };
    },
    'params'
  > = useRoute();
  const { name, birth_year, eye_color, gender, hair_color, height, mass, skin_color } =
    route.params;

  return (
    <View>
      <Headline style={styles.headline}>{name}</Headline>
      <List.Item
        title="Birth Year"
        description={birth_year}
        left={() => <List.Icon icon="cake" />}
      />
      <List.Item title="Eye Color" description={eye_color} left={() => <List.Icon icon="eye" />} />
      <List.Item title="Gender" description={gender} left={() => <List.Icon icon="account" />} />
      <List.Item
        title="Hair Color"
        description={hair_color}
        left={() => <List.Icon icon="palette" />}
      />
      <List.Item
        title="Height"
        description={height}
        left={() => <List.Icon icon="human-male-height-variant" />}
      />
      <List.Item
        title="Mass"
        description={mass}
        left={() => <List.Icon icon="weight-kilogram" />}
      />
      <List.Item
        title="Skin Color"
        description={skin_color}
        left={() => <List.Icon icon="invert-colors" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    padding: 20,
  },
});

export default CharacterDetail;
