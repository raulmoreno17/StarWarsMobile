import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { List } from 'react-native-paper';

const CharacterDetail = () => {
  const route = useRoute();
  const { name, birth_year, eye_color, gender, hair_color, height, mass, skin_color } =
    route.params;

  console.log('route.params', route.params);
  //console.log('otherParam',otherParam);
  return (
    <View>
      <Text>{name}</Text>
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
      <List.Item title="Height" description={height} left={() => <List.Icon icon="human-male-height-variant" />} />
      <List.Item title="Mass" description={mass} left={() => <List.Icon icon="weight-kilogram" />} />
      <List.Item
        title="Skin Color"
        description={skin_color}
        left={() => <List.Icon icon="invert-colors" />}
      />
    </View>
  );
};

export default CharacterDetail;
