import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

const HomeRoute = () => null;
const LeaderboardRoute = () => null;
const FarmRoute = () => null;

const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'leaderboard', title: 'Leaderboard', icon: 'playlist-star' },
    { key: 'farm', title: 'Farm', icon: 'factory' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    leaderboard: LeaderboardRoute,
    farm: FarmRoute
  });

  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

export default Footer;
