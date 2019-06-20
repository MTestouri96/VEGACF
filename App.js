import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from './WorkSpace/Screens/LoginScreen';
import LoginEmailScreen from './WorkSpace/Screens/LoginEmailScreen';
import SigninScreen from './WorkSpace/Screens/SigninScreen';

const RootStack = createAppContainer(createStackNavigator({
  Screen1: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Screen2: {
    screen: LoginEmailScreen,
  },
  Screen3: {
    screen: SigninScreen,
  }
}));

export default RootStack;