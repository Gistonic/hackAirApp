import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QuestScreen from "../screens/QuestScreen";
import Quest1Screen from "../screens/Quest1Screen";
import Quest2Screen from "../screens/Quest2Screen";
import Quest3Screen from "../screens/Quest3Screen";
import FlightScreen from "../screens/FlightScreen";

const HomeStack = createStackNavigator({
  Flight: FlightScreen,
    Home: HomeScreen,
    Quest: QuestScreen,
    Quest1: Quest1Screen,
    Quest2: Quest2Screen,
    Quest3: Quest3Screen,

});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-airplane${focused ? '' : '-outline'}`
          : 'md-airplane'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'myWallet',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'}
    />
  ),
};

const QuestStack = createStackNavigator({
    Quest: Quest1Screen,
});

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
