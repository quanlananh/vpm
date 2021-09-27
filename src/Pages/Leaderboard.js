import React, { useState } from "react";
import { connect } from "react-redux";
import { View, ScrollView, StyleSheet } from "react-native";
import Leaders from "../Components/Leaders";
import LeadersHeader from "../Components/LeadersHeader";
import AccountHeader from "./AccountHeader";
import FarmerEarning from "../Components/FarmerEarning";
import Header from "../Components/Header";

const Leaderboard = (props) => {
  const leaderBoard = props.info.data.leaderBoard;
  const [showAccount, setShowAccount] = useState(false);
  const [launcherId, setLauncherId] = useState(null);
  const [name, setName] = useState(null);

  if (showAccount && leaderBoard != null) {
    return (
      <View style={styles.container}>
        <Header showSearch={true} navigation={props.navigation} />
        <AccountHeader
          setShowAccount={setShowAccount}
          launcherId={launcherId}
          name={name}
          rewards={props.info.data.farmerEarning}
          payout={props.info.data.farmerPayout}
          chiaPrice={props.info.data.chiaPrice}
        />
        <FarmerEarning launcherId={launcherId} />
      </View>
    );
  } else {
    return (
      <View>
        <Header showSearch={true} navigation={props.navigation} />
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
        >
          <LeadersHeader />
          <Leaders
            info={[
              { leaderBoard },
              { launcherId },
              { setLauncherId },
              { name },
              { setName },
              { setShowAccount },
            ]}
          />
        </ScrollView>
      </View>
    );
  }
};

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

export default connect(mapStateToProps)(Leaderboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginTop: -30,
  },
});
