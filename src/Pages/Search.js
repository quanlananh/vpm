import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "../Components/Header";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import AccountHeader from "./AccountHeader";
import FarmerEarning from "../Components/FarmerEarning";

const Search = (props) => {
  const { searchBar, searchInput, msg } = styles;
  const [searchQuery, setSearchQuery] = useState("");
  const [farmerInfo, setFarmerInfo] = useState([]);
  const [showSeachMsg, setShowSearchhMsg] = useState(false);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (query == "") setFarmerInfo([]);
  };

  const leaderBoard = props.info.data.leaderBoard;

  const onSubmitEditing = () => {
    if (leaderBoard != null && searchQuery.trim() != "") {
      // Farmer Information Filter by Alias
      let farmer = leaderBoard.filter(
        (obj) =>
          obj.name != null &&
          obj.name.toLowerCase() == searchQuery.toLowerCase()
      );

      // Farmer Information Filter by LauncherId
      if (farmer.length == 0) {
        farmer = leaderBoard.filter(
          (obj) => obj.launcherId == searchQuery.trim()
        );
      }
      setShowSearchhMsg(farmer.length == 0);
      setFarmerInfo(farmer);
      // setSearchQuery("");
    }
  };

  return (
    <>
      <Header
        showSearch={false}
        navigation={props.navigation}
        farmerInfo={farmerInfo}
        setFarmerInfo={setFarmerInfo}
      />
      {farmerInfo.length == 0 ? (
        <View>
          <Searchbar
            selectionColor="darkgrey"
            placeholder="launcher id or alias"
            onChangeText={onChangeSearch}
            onSubmitEditing={onSubmitEditing}
            value={searchQuery}
            style={searchBar}
            inputStyle={searchInput}
            autoCapitalize={"none"}
            autoFocus={true}
          />
          {showSeachMsg ? (
            <Text style={msg}>
              Farmer not found in Vast Pool. The initial partials submission
              could take upto several minutes to be fully registered with the
              pool. Try searching again.
            </Text>
          ) : null}
        </View>
      ) : (
        <>
          <AccountHeader
            hideBackButton={true}
            launcherId={farmerInfo[0].launcherId}
            name={farmerInfo[0].name}
            rewards={props.info.data.farmerEarning}
            payout={props.info.data.farmerPayout}
            chiaPrice={props.info.data.chiaPrice}
          />

          <FarmerEarning launcherId={farmerInfo[0].launcherId} />
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

export default connect(mapStateToProps)(Search);

const styles = {
  searchBar: {
    backgroundColor: "transparent",
    borderColor: "#9be5aa",
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#9be5aa",
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  searchInput: {
    fontSize: 14,
  },
  msg: {
    fontSize: 18,
    textAlign: "center",
    margin: 20,
  },
};
