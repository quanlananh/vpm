import React, { useState } from "react";
import { connect } from "react-redux";
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from "react-native";
import Leaders from "../Components/Leaders";
import LeadersHeader from "../Components/LeadersHeader";
import AccountHeader from "./AccountHeader";
import FarmerEarning from "../Components/FarmerEarning";

const Leaderboard = (props) => {
  const leaderBoard = props.info.data.leaderBoard;
  const [showAccount, setShowAccount] = useState(false);
  const [launcherId, setLauncherId] = useState(null);
  const [name, setName] = useState(null);

  if (showAccount && leaderBoard != null) {
    return (
      <SafeAreaView style={styles.container}>
        <AccountHeader
          setShowAccount={setShowAccount}
          launcherId={launcherId}
          name={name}
          rewards={props.info.data.farmerEarning}
          chiaPrice={props.info.data.chiaPrice}
        />
        <FarmerEarning launcherId={launcherId} />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
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
    paddingTop: StatusBar.currentHeight,
  },
  contentContainer: {
    marginTop: -30,
  },
});
