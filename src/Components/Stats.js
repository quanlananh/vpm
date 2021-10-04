import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import PoolSpaceD3Chart from "./PoolSpaceD3Chart";
import { LinearGradient } from "expo-linear-gradient";
// import moment from "moment";
import numbro from "numbro";
import { CountUp } from "use-count-up";

export default function Stats(props) {
  const { card, content, paragraph, title } = styles;

  // pool info
  const {
    id,
    netspaceRaw,
    netspace,
    netspaceUnit,
    netDifficulty,
    farmerOnline,
    blockFound,
    poolSpaceRaw,
    poolSpace,
    poolSpaceUnit,
    poolTotalPoints,
    updateTime,
    poolSpaceHistories,
  } = { ...props.poolInfo };

  // need to set initial state value in order to prevent a bug described here: https://github.com/indiespirit/react-native-chart-kit/issues/237
  const [psh, setPSH] = useState([
    { poolSpaceRaw: 0, poolSpace: 0, poolSpaceUnit: "PiB", date: null },
    { poolSpaceRaw: 0, poolSpace: 0, poolSpaceUnit: "PiB", date: null },
  ]);

  let x = [];
  let y = [];

  useEffect(() => {
    setPSH(poolSpaceHistories);
  });

  if (psh != "undefined" && psh != null) {
    // x = psh.map((value) => moment(value.date).format("DD"));
    x = psh.map((value) => value.date);
    y = psh.map((value) => value.poolSpace);
  }
  return (
    <View>
      <View style={card}>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Net Space</Paragraph>
            <Title style={title}>
              <CountUp isCounting end={netspace} /> {netspaceUnit}
            </Title>
          </LinearGradient>
        </Card.Content>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Farmer Online</Paragraph>
            <Title style={title}>
              <CountUp isCounting end={farmerOnline} />
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
            <Paragraph style={paragraph}>Pool Space</Paragraph>
            <Title style={title}>
              <CountUp isCounting end={poolSpace} /> {poolSpaceUnit}
            </Title>
          </LinearGradient>
        </Card.Content>
        <Card.Content style={content}>
          <LinearGradient
            colors={["rgba(225, 225, 225, 0.24)", "rgba(255,207,159,0.7)"]}
            start={{ x: 0.1, y: 0.2 }}
          >
            <Paragraph style={paragraph}>Block Found</Paragraph>
            <Title style={title}>
              <CountUp isCounting end={blockFound} />
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
            <Paragraph style={paragraph}>Total Points</Paragraph>
            <Title style={title}>
              {/* <CountUp
                isCounting
                end={poolTotalPoints}
                formatter={(value) => value.toLocaleString()}
              /> */}
              {numbro(poolTotalPoints).format({
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
            <Paragraph style={paragraph}>Net Difficulty</Paragraph>
            <Title style={title}>
              {numbro(netDifficulty).format({
                thousandSeparated: true,
                mantissa: 0,
              })}
            </Title>
          </LinearGradient>
        </Card.Content>
      </View>

      {psh != "undefined" && psh != null ? (
        // <PoolSpaceChart x={x} y={y} />
        <PoolSpaceD3Chart x={x} y={y} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
