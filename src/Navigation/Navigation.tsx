import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/home/Home';
import {NAME_SCREENS, icon} from '../constants/constants';
import SplashScreen from '../Screens/SplashScreens/SplashScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../Screens/Search/SearchScreen';
import BookmarkScreen from '../Screens/BookMark/BookmarkScreen';
import SettingScreen from '../Screens/Setting/SettingScreen';
import IconBottomTab from '../Components/IconBottomTab';
import Detail from '../Screens/Detail/Detail';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NAME_SCREENS.SPLASHSCREEN} component={SplashScreen} />
      <Stack.Screen
        name={NAME_SCREENS.BOTTOMTAB}
        component={BottomTabNavigation}
      />

      <Stack.Screen name={NAME_SCREENS.DETAIL} component={Detail}/>
    </Stack.Navigator>
  );
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
          // thay đổi style bottomtab
        }
      }}>
      <Tab.Screen
        name={NAME_SCREENS.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <IconBottomTab focused={focused}  icon={icon.iconhome}/>,
          
        }}
      />
      <Tab.Screen
        name={NAME_SCREENS.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => <IconBottomTab focused={focused} icon={icon.iconsearch}/>,
        }}
      />
      <Tab.Screen
        name={NAME_SCREENS.BOOKMARK}
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({focused}) => <IconBottomTab focused={focused}icon={icon.iconbookmark} />,
        }}
      />
      <Tab.Screen
        name={NAME_SCREENS.SETTING}
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => <IconBottomTab focused={focused}icon={icon.iconsetting} />,
        }}
      />
    </Tab.Navigator>
  );
};
