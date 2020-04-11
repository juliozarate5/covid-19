import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WorldScreenStacks from './WorldStack';
import ColombiaScreenStacks from './ColombiaStack';
import CountriesScreenStacks from './CountriesStack'

const NavigationStacks = createBottomTabNavigator({
        // stacks de navegación
    World:{
        screen: WorldScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Mundo",
            tabBarIcon: ({tintColor}) => (
                <Icon 
                    type="material-community"
                    name="earth"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Colombia:{
        screen: ColombiaScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Colombia",
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                    type="material-community"
                    name="flag-variant-outline"
                    size={22}
                    color={tintColor}
                />
            )
        })
    },
    Countries:{
        screen: CountriesScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Paises",
            tabBarIcon: ({ tintColor }) => (
                <Icon 
                    type="material-community"
                    name="map-search-outline"
                    size={22}
                    color={tintColor}
                />
            )
        })
    }
},
{
    initialRouteName: "World",
    order: ["World", "Colombia", "Countries"],
    tabBarOptions:{
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
    }
}
);

export default createAppContainer(NavigationStacks);