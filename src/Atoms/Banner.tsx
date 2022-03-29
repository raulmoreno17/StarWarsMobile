import { Image, Text, StyleSheet, View } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png',
        }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  logo: {
    width: 200,
    height: 100,
    borderRadius: 25,
  },
});

export default Banner;
