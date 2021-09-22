import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import Stats from "../Components/Stats";
import RecentlyFarmed from "../Components/RecentlyFarmed";
import { Animated, ScrollView, View, StatusBar } from "react-native";
import { Subheading, Button, Text } from "react-native-paper";
import Header from "../Components/Header";

// import {Global} from '../Styles/Global'
const Home = (props) => {
  const poolInfo = props.info.data.poolInfo;
  const winningInfo = props.info.data.winningInfo;
  const { contentBody, subHeading, button, scrollView, text, subHeadingText } =
    styles;
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={contentBody}>
      <StatusBar hidden={true} />
      <Header
        showSearch={true}
        navigation={props.navigation}
        farmerInfo={null}
        setFarmerInfo={null}
      />
      <ScrollView
        scrollToOverflowEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={scrollView}
      >
        <Subheading style={subHeading}>
          <Text style={subHeadingText}>
            THE WORLD'S MOST EEFICIENT CHIA FARMING POOL
          </Text>
        </Subheading>
        <Button
          style={button}
          icon="login"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          <Text style={text}>Join Now</Text>
        </Button>
        <Animated.View // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim, // Bind opacity to animated value
          }}
        >
          <Stats poolInfo={poolInfo} />
          <RecentlyFarmed winningInfo={winningInfo} />
        </Animated.View>
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

export default connect(mapStateToProps)(Home);

const styles = {
  contentBody: {
    paddingTop: 0,
    background: "white",
  },
  subHeading: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    backgroundColor: "rgb(255, 135, 35)",
    marginTop: 20,
    marginBottom: 15,
    height: 40,
    justifyContent: "center",
    width: 140,
    shadowColor: "darkgrey",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 3,
    elevation: 1,
    borderRadius: 20,
  },
  scrollView: {
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  subHeadingText: {
    color: "green",
    textAlign: "center",
    fontSize: 12.5,
    fontWeight: "bold",
  },
};
