import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { DataTable } from "react-native-paper";
import moment from "moment";
import { xchScanURL } from "../Utils/Constants";

export default function RecentlyFarmed(props) {
  const { content, title, text, textName, row, block, name, reward } = styles;
  const [RFC, setRFC] = useState([]);

  useEffect(() => {
    setRFC(props.winningInfo);
  });

  if (RFC != "undefined" && RFC != null) {
    return (
      <View style={content}>
        <DataTable>
          <Text style={title}>Recently Farmed Chia</Text>
          <DataTable.Header>
            <DataTable.Title numeric style={block}>
              Block #
            </DataTable.Title>
            <DataTable.Title numeric style={name}>
              Coin Hash
            </DataTable.Title>
            <DataTable.Title numeric>Date</DataTable.Title>
            <DataTable.Title numeric style={reward}>
              Reward
            </DataTable.Title>
          </DataTable.Header>

          {RFC.map((obj) => {
            return (
              <DataTable.Row style={row} key={obj.name}>
                <DataTable.Cell numeric style={block}>
                  <Text style={text}>{obj.confirmedAtHeight}</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  style={name}
                  onPress={() => Linking.openURL(xchScanURL + obj.name)}
                >
                  <Text style={textName}>...{obj.name.slice(-17)}</Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={text}>
                    {moment(obj.createdAt).format("MM/DD HH:mm")}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric style={reward}>
                  <Text style={text}>{obj.amount / 1000000000000} XCH</Text>
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
    marginTop: 20,
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
  block: {
    flex: 0.6,
  },
  name: {
    flex: 1.6,
  },
  reward: {
    flex: 0.7,
  },
});
