import { createStackNavigator } from 'react-navigation-stack';
import CountriesScreen from '../screens/Countries';

const CountriesScreenStacks = createStackNavigator({
    Countries: {
        screen: CountriesScreen,
        navigationOptions: () => ({
            title: "Todos los Paises"
        })
    }
});

export default CountriesScreenStacks;