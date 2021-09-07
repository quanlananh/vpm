import React from "react";
import { View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import numbro from "numbro";

const Account = (props) => {
  const { launcherId, points, difficulty, plots, name, minPayout } = {
    ...props.farmerInfo[0],
  };
  const { card, content, paragraph, title } = styles;

  return (
    <View>
      <View style={card}>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Farmer Points</Paragraph>
            <Title style={title}>
              {numbro(points).format({
                thousandSeparated: true,
                mantissa: 0,
              })}
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
              {numbro(plots).format({
                thousandSeparated: true,
                mantissa: 0,
              })}
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
              {numbro(difficulty).format({
                thousandSeparated: true,
                mantissa: 0,
              })}
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
              {numbro(props.totalPaid).format({
                thousandSeparated: true,
                mantissa: 3,
              })}
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
