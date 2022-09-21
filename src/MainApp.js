import React, {useState, useEffect} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AboutScreen from './screens/AboutScreen';
import GameScreen from './screens/GameScreen';
import Axios from 'axios';


const MainRoute = () => {


  return (
    <GameScreen/>
)};

const StatisticsRoute = () => <Text>Recents</Text>;

const AccountRoute = () => <Text>Accounts</Text>;

const AboutRoute = () => <AboutScreen/>;

const MainApp = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'main', title: 'Main', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'statistics', title: 'Statistics', focusedIcon: 'chart-bar', unfocusedIcon: 'chart-bar-stacked' },
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'about', title: 'About', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    main: MainRoute,
    statistics: StatisticsRoute,
    account: AccountRoute,
    about: AboutRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainApp;