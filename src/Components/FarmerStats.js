import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import FetchData from "../Utils/FetchData";
import Account from "../Pages/Account";
import FarmerChart from "./FarmerChart";
import FarmerRewards from "./FarmerRewards";
import Spinner from "react-native-loading-spinner-overlay";
import moment from "moment";

class FarmerStats extends Component {
  componentDidMount() {
    this.props.FetchData(this.props.launcherId);
  }

  render() {
    const { info } = this.props;

    let farmerInfo = null;
    let estimates = null;
    let rewards = null;
    let payout = null;
    let totalPaid = 0;
    let x = [];
    let y = [];

    if (info.data.farmerStats != "undefined" && info.data.farmerStats != null) {
      // Farmer Information
      farmerInfo = info.data.leaderBoard.filter(
        (obj) => obj.launcherId == this.props.launcherId
      );
      //Farmer Estimated Plots
      if (info.data.farmerStats.launcherId == this.props.launcherId) {
        estimates = info.data.farmerStats.estimates;
        x = estimates.map((value) => moment(value.timestamp).format("HH"));
        y = estimates.map((value) => value.plots);
        // only show the last 10 due to mobile screen width limitation
        x = x.slice(Math.max(x.length - 10, 1));
        y = y.slice(Math.max(y.length - 10, 1));
      }
      //Farmer Payout
      if ((info.data.farmerPayout.launcherId = this.props.launcherId)) {
        rewards = info.data.farmerEarning;
        payout = info.data.farmerPayout;
        const total = payout.reduce((a, b) => ({
          amount: a.amount + b.amount,
        }));
        totalPaid = (total.amount / 1000000000000).toFixed(2);
      }
    }

    return (
      <View>
        {farmerInfo != null ? (
          <Account farmerInfo={farmerInfo} totalPaid={totalPaid} />
        ) : (
          <Spinner
            visible={true}
            textContent={"fetching data..."}
            textStyle={{ color: "#253145" }}
            animation="fade"
          />
        )}
        {estimates != null ? <FarmerChart x={x} y={y} /> : null}
        {rewards != null ? (
          <FarmerRewards rewards={rewards} chiaPrice={info.data.chiaPrice} />
        ) : null}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

export default connect(mapStateToProps, { FetchData })(FarmerStats);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  contentContainer: {
    marginTop: -30,
  },
});
