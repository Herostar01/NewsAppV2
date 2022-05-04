import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import All from './screens/All';
import { Business } from './screens/Business';
import { Tech } from './screens/Tech';
import Sports from './screens/Sports';
import { Health } from './screens/Health';

import { Icon } from 'react-native-elements'
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{
  "tabBarActiveTintColor": "#00b8d4",
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}}   >
        <Tab.Screen name="All" component={All}
          options={{
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color={props.color} />
            ),


          }} />

<Tab.Screen name="Business" 
        component={Business} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='feather'
            name='dollar-sign'
            color={color}
            />
          ),
          }}    />

      <Tab.Screen name="Health" 
        component={Health} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='feather'
            name='heart'
            color={color}
            />
          ),
          }}    />
      <Tab.Screen name="Sports" 
        component={Sports} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='ionicon'
            name='football-outline'
            color={color}
            />
          ),
          }}    />
      <Tab.Screen name="Tech" 
        component={Tech} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='ionicon'
            name='watch-outline'
            color={color}
            />
          ),
          }}    />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

