import React from "react";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Subheading, Button, Text } from "react-native-paper";

const ToDo = (props) => {
  const { contentBody, subHeading, button, scrollView, text, subHeadingText } =
    styles;
  return (
    <>
      <Header
        showSearch={true}
        navigation={props.navigation}
        farmerInfo={null}
        setFarmerInfo={null}
      />
      <View style={contentBody}>
        <MaterialIcons
          name="construction"
          color={"rgb(255, 135, 35)"}
          size={48}
        />
        <Subheading style={subHeading}>
          <Text style={subHeadingText}>Under Construction</Text>
        </Subheading>
        <Button
          style={button}
          icon="arrow-left-circle"
          mode="contained"
          onPress={() => props.navigation.goBack(null)}
        >
          <Text style={text}>Go Back</Text>
        </Button>
      </View>
    </>
  );
};

export default ToDo;

const styles = {
  contentBody: {
    paddingTop: 100,
    background: "white",
    alignItems: "center",
  },
  subHeading: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    padding: 20,
  },
  button: {
    backgroundColor: "rgb(255, 135, 35)",
    marginTop: 50,
    marginBottom: 15,
    height: 40,
    justifyContent: "center",
    width: 140,
    shadowColor: "darkgrey",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 3,
    elevation: 1,
    borderRadius: 20,
  },
  scrollView: {
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  subHeadingText: {
    color: "green",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
};
