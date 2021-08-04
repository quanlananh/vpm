import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Store from './src/Store';
import { Header, Body, Footer } from './src/Components';

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9be5aa',
    // primary: '#000',
    accent: '#f1c40f'
  }
  // ...DarkTheme,
  // colors: {
  //   ...DarkTheme.colors,
  //   primary: '#2d3436',
  //   accent: '#1C1C1C',
  //   background: '#636e72',
  //   paper: '#000000',
  //   text: '#000000',
  //   disabled: '#000000',
  //   placeholder: '#000000'
  // }
};

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <PaperProvider theme={theme}>
          <Header />
          <Body />
          <Footer />
        </PaperProvider>
      </Provider>
    );
  }
}
