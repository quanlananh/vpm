import React from "react";
import { View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

export default function LeadersHeader() {
  const { content, plotsize, header, rank, name, diff, points } = styles;
  return (
    <View style={content}>
      <DataTable>
        <DataTable.Header style={header}>
          <DataTable.Title style={rank} numeric>
            Rank{" "}
          </DataTable.Title>
          <DataTable.Title style={name}>Farmer</DataTable.Title>
          <DataTable.Title style={plotsize} numeric>
            Plot Size
          </DataTable.Title>
          <DataTable.Title numeric style={diff}>
            Diff
          </DataTable.Title>
          <DataTable.Title numeric style={points}>
            Points
          </DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "black",
  },
  plotsize: {
    flex: 1,
  },
  header: {
    backgroundColor: "rgb(255, 135, 35)",
  },
  rank: {
    flex: 0.5,
  },
  name: {
    flex: 2.5,
  },
  diff: {
    flex: 0.65,
  },
  points: {
    flex: 1,
  },
});
