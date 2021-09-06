import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";
import moment from "moment";

class FarmerPartial extends Component {
  render() {
    const { content, title, text, row, date, coinId, difficulty } = styles;
    const { info } = this.props;
    let partial = null;

    //Farmer Partial
    if (
      info.data.farmerPartial != "undefined" &&
      info.data.farmerPartial != null
    ) {
      partial = info.data.farmerPartial;
    }

    if (partial != "undefined" && partial != null) {
      return (
        <View style={content}>
          <DataTable>
            <Text style={title}>Partial History</Text>
            <DataTable.Header>
              <DataTable.Title style={date}>Date</DataTable.Title>
              <DataTable.Title style={coinId}>ID</DataTable.Title>
              <DataTable.Title numeric style={difficulty}>
                Difficulty
              </DataTable.Title>
            </DataTable.Header>

            {partial.map((obj, index) => {
              return (
                <DataTable.Row style={row} key={index}>
                  <DataTable.Cell style={date}>
                    <Text style={text}>
                      {moment(obj.timestamp).format("MM/DD HH:mm")}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={coinId}>
                    <Text style={text}>{obj.id}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={difficulty} numeric>
                    <Text style={text}>{obj.difficulty}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </View>
      );
    } else return null;
  }
}

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

export default connect(mapStateToProps)(FarmerPartial);

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
  },
  row: {
    borderBottomWidth: 1,
  },
  date: {
    flex: 1.2,
  },
  coinId: {
    flex: 2.5,
  },
  difficulty: {
    flex: 0.8,
  },
});
