import { createStackNavigator, createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Details: { screen: Details },
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