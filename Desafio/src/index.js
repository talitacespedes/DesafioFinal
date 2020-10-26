import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Geral from './scenes/Geral';
import Categoria from './scenes/Categoria';
import Mes from './scenes/Mes';

import colors from './utils/colors';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Lista Geral" component={Geral}/>
        <Tab.Screen name="Por Mês" component={Mes}/>
        <Tab.Screen name="Por Categoria" component={Categoria}/>
    </Tab.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Geral">
                <Stack.Screen 
                    name="Geral" 
                    component={Tabs}
                    options={{
                        title: 'Itau Gastos Cartão',
                        headerStyle: {
                            backgroundColor: colors.blue
                        },
                        headerTintColor: colors.white100
                    }}
                />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
