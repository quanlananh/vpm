import React from "react";
import { StyleSheet, Image } from "react-native";
import { Appbar, TouchableRipple, Switch } from "react-native-paper";
import logo from "./../../assets/logo.png";
import Home from "../Pages/Home";

const Header = ({ navigation }) => {
  const _toggleTheme = () => console.log("Toggle Theme");
  const _handleSearch = () => console.log("Searching");
  const { headerContainer, title, subtitle, image, toggle } = styles;

  return (
    <>
      <Appbar.Header style={headerContainer}>
        <Image style={image} source={logo} />
        <Appbar.Content
          title="Vast"
          subtitle="POOL"
          titleStyle={title}
          subtitleStyle={subtitle}
        />
        <TouchableRipple onPress={() => _toggleTheme()}>
          <Switch style={toggle} color={"rgb(255, 135, 35)"} value={true} />
        </TouchableRipple>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => navigation.toggleDrawer()}
        />
      </Appbar.Header>
      <Home />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "black",
  },
  title: {
    fontSize: 30,
    color: "rgb(255, 135, 35)",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(255, 135, 35)",
    marginLeft: 40,
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
