import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import {Text} from 'react-native-svg';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex: 1, alingItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 1</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View style={{flex: 1, alingItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 1</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View style={{flex: 1, alingItems: 'center', justifyContent: 'center'}}>
      <Text>This is Tab 1</Text>
    </View>
  );
};

const ProfileTabNavigation = () => {
  return (
    <Profile.Navigator>
      <Profile.Screen name={'Tab1'} component={Tab1} />
      <Profile.Screen name={'Tab2'} component={Tab2} />
      <Profile.Screen name={'Tab3'} component={Tab3} />
    </Profile.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
