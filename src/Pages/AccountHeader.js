import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Appbar } from "react-native-paper";

export default function AccountHeader(props) {
  const { content, title, text } = styles;
  const [totalUSD, setTotalUSD] = useState(0);

  useEffect(() => {
    //Farmer Payout
    if (props.rewards != "undefined" && props.payout != null) {
      const total = props.payout.reduce((a, b) => ({
        amount: a.amount + b.amount,
      }));
      setTotalUSD((total.amount / 1000000000000) * props.chiaPrice.usd);
    }
  });

  return (
    <Appbar.Header style={content}>
      {props.hideBackButton ? (
        <Text style={text}>Last Search: </Text>
      ) : (
        <Appbar.BackAction
          color={"white"}
          onPress={() => {
            props.setShowAccount(false);
          }}
        />
      )}
      <Appbar.Content
        titleStyle={title}
        title={
          (props.name != null
            ? props.name
            : "..." + props.launcherId.slice(-17)) +
          ":  $" +
          totalUSD.toFixed(2)
        }
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 0,
    backgroundColor: "rgb(255, 135, 35)",
  },
  title: {
    fontSize: 13.5,
    color: "#9be5aa",
    fontWeight: "bold",
    alignSelf: "center",
  },
  text: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    marginLeft: 20,
  },
});
