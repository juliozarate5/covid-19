import { createStackNavigator } from 'react-navigation-stack';
import WorldScreen from '../screens/World';

const WorldScreenStacks = createStackNavigator({
    World: {
        screen: WorldScreen,
        navigationOptions: () => ({
            title: "Casos en el Mundo"
        })
    }
});

export default WorldScreenStacks;