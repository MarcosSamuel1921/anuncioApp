import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListPage from './src/pages/ListPage/';
import AddItemPage from './src/pages/AddItemPage/';
import ItemDetailsPage from './src/pages/ItemDetailsPage/';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="Anuncio"
          component={ListPage}
          options={{
            headerTintColor: '#FF0000',
          }}
        />
        <Stack.Screen
          name="NewAnuncio"
          component={AddItemPage}
          options={{
            headerTintColor: '#FF0000',
          }}
        />
        <Stack.Screen
          name="Details"
          component={ItemDetailsPage}
          options={{
            headerTintColor: '#FF0000',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
