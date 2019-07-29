import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Details: { screen: DetailsScreen },
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);

class HomeNavigator extends React.Component {
    render() {
        return <AppContainer />;
    }
}
export default HomeNavigator;