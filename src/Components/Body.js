import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Headline, Title, Subheading, Button, Caption } from 'react-native-paper';
import FetchData from '../Actions/FetchData';
import Stats from './Stats';

class Body extends Component {
  componentDidMount() {
    this.props.FetchData();
  }

  render() {
    const info = this.props.info;
    const { contentBody, title, headline, subheading, button } = styles;

    return (
      <ScrollView contentContainerStyle={contentBody}>
        <Title style={title}>
          Welcome to
          <Headline style={headline}> Vast Pool</Headline>
        </Title>
        <Subheading style={subheading}>Join forces to take back control of predictable Chia farming winnings with the official Chia Pooling Protocol</Subheading>
        <Button style={button} icon='login' mode='contained' onPress={() => console.log('Pressed')}>
          JOIN NOW
        </Button>
        {info.isFetching ? <Spinner visible={info.isFetching} textContent={'fetching data...'} textStyle={{ color: '#253145' }} animation='fade' /> : <Stats info={info} />}
      </ScrollView>
    );
  }
}

const styles = {
  contentBody: {
    marginBottom: -20,
    paddingTop: 5,
    alignItems: 'center',
    background: 'white'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
    // shadowColor: 'darkgreen',
    // shadowOffset: { width: 3, height: 3 },
    // shadowOpacity: 3,
    // elevation: 1
  },
  headline: {
    color: 'green'
  },
  subheading: {
    textAlign: 'center',
    color: 'darkorange'
  },
  button: {
    marginVertical: 30,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    shadowColor: 'darkgreen',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 3,
    elevation: 1
  }
};

function mapStateToProps(state) {
  return {
    info: state.info
  };
}

export default connect(mapStateToProps, { FetchData })(Body);
