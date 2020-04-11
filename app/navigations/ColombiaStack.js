import { createStackNavigator } from 'react-navigation-stack';
import ColombiaScreen from '../screens/Colombia';

const ColombiaScreenStacks = createStackNavigator({
    Colombia: {
        screen: ColombiaScreen,
        navigationOptions: () => ({
            title: "Casos en Colombia"
        })
    }
});

export default ColombiaScreenStacks;