import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import CharacterDetail from './src/Pages/CharacterDetail';
import React from 'react';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="StarWarsMobile"
                options={{ title: 'Star Wars Mobile' }}
                component={Home}
              />
              <Stack.Screen
                name="CharacterDetail"
                options={{ title: 'Character Details' }}
                component={CharacterDetail}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
