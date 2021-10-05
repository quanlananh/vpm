import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";
import { CountUp } from "use-count-up";

export default function FarmerRewards(props) {
  const { content, title, text, textName, row, period, xch, usd } = styles;
  const [Rewards, setRewards] = useState([]);

  useEffect(() => {
    setRewards(props.rewards);
  });

  if (Rewards != "undefined" && Rewards != null) {
    return (
      <View style={content}>
        <DataTable>
          <Text style={title}>Your Rewards</Text>
          <DataTable.Header>
            <DataTable.Title style={period}>Period</DataTable.Title>
            <DataTable.Title numeric style={xch}>
              XCH
            </DataTable.Title>
            <DataTable.Title numeric style={usd}>
              USD
            </DataTable.Title>
          </DataTable.Header>

          {Rewards.map((obj, index) => {
            return (
              <DataTable.Row style={row} key={index}>
                <DataTable.Cell style={period}>
                  <Text style={text}>{obj.period}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={xch} numeric>
                  <Text style={text}>
                    <CountUp
                      isCounting
                      easing="easeInCubic"
                      end={obj.amount / 1000000000000}
                      thousandsSeparator=","
                      decimalSeparator="."
                      decimalPlaces="3"
                    />
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell style={usd} numeric>
                  <Text style={text}>
                    $
                    <CountUp
                      isCounting
                      easing="easeInCubic"
                      end={(obj.amount / 1000000000000) * props.chiaPrice.usd}
                      thousandsSeparator=","
                      decimalSeparator="."
                      decimalPlaces="2"
                    />
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </View>
    );
  } else return null;
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    marginTop: 5,
  },
  title: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
  },
  textName: {
    fontSize: 13,
    color: "rgb(255, 135, 35)",
  },
  row: {
    borderBottomWidth: 1,
  },
  period: {
    flex: 0.7,
  },
  xch: {
    flex: 1.3,
  },
  usd: {
    flex: 1,
  },
});
