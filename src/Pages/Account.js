import React from "react";
import { Dimensions, TextInput, View, StatusBar } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { CountUp } from "use-count-up";

const screenHeight = Dimensions.get("window").height;
// import {Global} from '../Styles/Global'

const Account = (props) => {
  const { launcherId, points, difficulty, plots, name, minPayout } = {
    ...props.farmerInfo[0],
  };

  const { card, content, paragraph, title } = styles;

  return (
    <View>
      {/* display launcherID for testing purpose */}
      {/* <TextInput
        placeholder={launcherId}
        value={launcherId}
        autoCapitalize={"none"}
        autoFocus={true}
      /> */}

      <View style={card}>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Farmer Points</Paragraph>
            <Title style={title}>
              <CountUp
                isCounting
                easing="easeInCubic"
                end={points}
                formatter={(value) => value.toLocaleString()}
              />
            </Title>
          </LinearGradient>
        </Card.Content>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Plot Size</Paragraph>
            <Title style={title}>
              <CountUp
                isCounting
                end={plots}
                formatter={(value) => value.toLocaleString()}
              />
            </Title>
          </LinearGradient>
        </Card.Content>
      </View>
      <View style={card}>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Difficulty</Paragraph>
            <Title style={title}>
              <CountUp
                isCounting
                end={difficulty}
                formatter={(value) => value.toLocaleString()}
              />
            </Title>
          </LinearGradient>
        </Card.Content>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Total Paid XCH</Paragraph>
            <Title style={title}>
              <CountUp
                isCounting
                end={parseFloat(props.totalPaid)}
                formatter={(value) => value.toLocaleString()}
              />
            </Title>
          </LinearGradient>
        </Card.Content>
      </View>
    </View>
  );
};

export default Account;

const styles = {
  card: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  launcherId: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
  },
  stats: {
    marginTop: -5,
    color: "darkgreen",
  },
  content: {
    width: 165,
    height: 60,
    margin: 5,
    textAlign: "center",
  },
  paragraph: {
    textAlign: "center",
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    color: "rgb(255, 135, 35)",
  },
};
