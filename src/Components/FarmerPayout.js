import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";
import moment from "moment";
import FarmerPayoutChart from "./FarmerPayoutChart";

class FarmerPayout extends Component {
  render() {
    const { content, title, text, row, date, coinId, block, xch } = styles;
    const { info } = this.props;
    let payout = null;
    let x = [];
    let y = [];

    //Farmer Payout
    if (
      info.data.farmerPayout != "undefined" &&
      info.data.farmerPayout != null
    ) {
      payout = info.data.farmerPayout;
      // prepare chart
      x = payout.map((value) => moment(value.payDate).format("MM/DD"));
      y = payout.map((value) => (value.amount / 1000000000000).toFixed(6));
      // only show the last 10 due to mobile screen width limitation
      x = x.slice(Math.max(x.length - 7, 1));
      y = y.slice(Math.max(y.length - 7, 1));
    }

    if (payout != "undefined" && payout != null) {
      return (
        <View style={content}>
          <DataTable>
            <Text style={title}>Payout History</Text>
            <DataTable.Header>
              <DataTable.Title style={date}>Date</DataTable.Title>
              <DataTable.Title numeric style={coinId}>
                Coin ID
              </DataTable.Title>
              <DataTable.Title numeric style={block}>
                Block
              </DataTable.Title>
              <DataTable.Title numeric style={xch}>
                XCH
              </DataTable.Title>
            </DataTable.Header>

            {payout.map((obj, index) => {
              return (
                <DataTable.Row style={row} key={index}>
                  <DataTable.Cell style={date}>
                    <Text style={text}>
                      {moment(obj.payDate).format("MM/DD HH:mm")}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={coinId} numeric>
                    <Text style={text}>...{obj.parentCoin.slice(-15)}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={block} numeric>
                    <Text style={text}>{obj.confirmedAtHeight}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={xch} numeric>
                    <Text style={text}>
                      {(obj.amount / 1000000000000).toFixed(6)}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
          <FarmerPayoutChart x={x} y={y} />
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

export default connect(mapStateToProps)(FarmerPayout);

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
    flex: 1.3,
  },
  coinId: {
    flex: 2,
  },
  block: {
    flex: 1,
  },
  xch: {
    flex: 1.1,
  },
});
