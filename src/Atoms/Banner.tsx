import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        testID="banner-img"
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
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    borderRadius: 25,
    alignSelf: "center",
  },
});

export default Banner;
