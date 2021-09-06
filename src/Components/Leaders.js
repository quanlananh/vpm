import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";

export default function Leaders(props) {
  const { plotsize, textName, row, rank, name, diff, points } = styles;

  const [RFC, setRFC] = useState([]);
  useEffect(() => {
    setRFC(props.info[0].leaderBoard);
  });

  return (
    <DataTable>
      {RFC.map((obj, index) => {
        return (
          <DataTable.Row style={row} key={index}>
            <DataTable.Cell style={rank} numeric>
              {index + 1}.{" "}
            </DataTable.Cell>
            <DataTable.Cell
              style={name}
              onPress={() => {
                props.info[2].setLauncherId(obj.launcherId);
                props.info[4].setName(obj.name);
                props.info[5].setShowAccount(true);
              }}
            >
              <Text style={textName}>
                {obj.name != null ? obj.name : obj.launcherId}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell style={plotsize} numeric>
              {obj.plots}
            </DataTable.Cell>
            <DataTable.Cell numeric style={diff}>
              {obj.difficulty}
            </DataTable.Cell>
            <DataTable.Cell numeric style={points}>
              {obj.points}
            </DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
}

const styles = StyleSheet.create({
  plotsize: {
    flex: 0.7,
  },
  textName: {
    fontSize: 13,
    color: "rgb(255, 135, 35)",
  },
  row: {
    borderBottomWidth: 1,
  },
  rank: {
    flex: 0.35,
  },
  name: {
    flex: 2,
  },
  diff: {
    flex: 0.5,
  },
  points: {
    flex: 0.7,
  },
});
