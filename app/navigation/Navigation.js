import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import WorldScreen from '../screens/World';
import ColombiaScreen from '../screens/Colombia';
import CountriesScreen from '../screens/Countries';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function WorldStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Casos en el Mundo" component={WorldScreen} />
            <Stack.Screen name="Worlds" component={WorldScreen} />
        </Stack.Navigator>
    )
}

function ColombiaStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Casos en Colombia" component={ColombiaScreen} />
        </Stack.Navigator>
    )
}

function CountriesStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Todos los países" component={CountriesScreen} />
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="Mundo" 
                component={WorldStack} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="earth" color={color} size={size}/>
                    )
                }}
                />
                <Tab.Screen 
                name="Colombia" 
                component={ColombiaStack} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="flag-variant-outline" color={color} size={size}/>
                    )
                }}
                />
                <Tab.Screen 
                name="Todos los Países" 
                component={CountriesStack} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="map-search-outline" color={color} size={size}/>
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}