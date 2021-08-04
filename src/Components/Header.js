import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useTheme, Appbar, TouchableRipple, Switch, Menu, Divider } from 'react-native-paper';
import logo from './../../assets/logo.png';

const Header = () => {
  // const _goBack = () => console.log('Went back');
  const _toggleTheme = () => console.log('Toggle Theme');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Menu');
  const theme = useTheme();
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Image style={styles.image} source={logo} />
      <Appbar.Content title='Vast' subtitle='POOL' titleStyle={[{ fontSize: 30, color: 'darkgreen', textAlign: 'left' }]} subtitleStyle={[{ fontSize: 12, fontWeight: 'bold', color: 'green', marginLeft: 40 }]} />
      <TouchableRipple onPress={() => _toggleTheme()}>
        <Switch style={[{ backgroundColor: theme.colors.primary, transform: [{ scaleX: 0.65 }, { scaleY: 0.65 }] }]} color={'#043927'} value={true} />
      </TouchableRipple>
      <Appbar.Action icon='magnify' onPress={_handleSearch} />
      <Appbar.Action icon='dots-vertical' onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 55,
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10
  }
});

const { headerContainer, header } = styles;

export default Header;
