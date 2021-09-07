import React from "react";
import { connect } from "react-redux";
import Stats from "../Components/Stats";
import RecentlyFarmed from "../Components/RecentlyFarmed";
import { ScrollView, View } from "react-native";
import { Subheading, Button, Text } from "react-native-paper";

// import {Global} from '../Styles/Global'
const Home = (props) => {
  const poolInfo = props.info.data.poolInfo;
  const winningInfo = props.info.data.winningInfo;
  const { contentBody, subHeading, button, scrollView, text, subHeadingText } =
    styles;

  return (
    <View style={contentBody}>
      <ScrollView
        scrollToOverflowEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={scrollView}
      >
        <Subheading style={subHeading}>
          <Text style={subHeadingText}>
            JOIN ONE OF THE WORLD'S BIGGEST PERFORMING CHIA FARMING POOL
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

        <Stats poolInfo={poolInfo} />
        <RecentlyFarmed winningInfo={winningInfo} />
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
    paddingTop: 5,
    background: "white",
  },
  subHeading: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
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
    fontSize: 13,
    fontWeight: "bold",
  },
};
