import React from "react";
import { StyleSheet, Image } from "react-native";
import { Appbar, TouchableRipple, Switch } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";
import logo from "./../../assets/logo.png";

const Header = ({ navigation, showSearch, farmerInfo, setFarmerInfo }) => {
  const _toggleTheme = () => console.log("Toggle Theme");
  const { headerContainer, title, subtitle, image, toggle } = styles;
  const jumpToSearch = DrawerActions.jumpTo("Search");
  const jumpToHome = DrawerActions.jumpTo("Welcome to Vast Pool");

  return (
    <Appbar.Header style={headerContainer}>
      <TouchableRipple onPress={() => navigation.dispatch(jumpToHome)}>
        <Image style={image} source={logo} />
      </TouchableRipple>
      <Appbar.Content
        title="Vast"
        subtitle="POOL"
        titleStyle={title}
        subtitleStyle={subtitle}
        onPress={() => navigation.dispatch(jumpToHome)}
      />
      <TouchableRipple onPress={() => _toggleTheme()}>
        <Switch style={toggle} color={"rgb(255, 135, 35)"} value={true} />
      </TouchableRipple>
      {showSearch ? (
        <Appbar.Action
          icon="magnify"
          onPress={() => navigation.dispatch(jumpToSearch)}
        />
      ) : farmerInfo != undefined && farmerInfo.length == 0 ? (
        <Appbar.BackAction onPress={() => navigation.goBack(null)} />
      ) : (
        <Appbar.BackAction
          onPress={() => {
            setFarmerInfo([]);
            navigation.dispatch(jumpToSearch);
          }}
        />
      )}
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => navigation.toggleDrawer()}
      />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "black",
    paddingBottom: 10,
  },
  title: {
    fontSize: 36,
    color: "rgb(255, 135, 35)",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(255, 135, 35)",
    marginLeft: 70,
    marginTop: -8,
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  toggle: {
    backgroundColor: "black",
    transform: [{ scaleX: 0.65 }, { scaleY: 0.65 }],
  },
});
