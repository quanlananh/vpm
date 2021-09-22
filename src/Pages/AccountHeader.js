import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Appbar } from "react-native-paper";
import numbro from "numbro";

export default function AccountHeader(props) {
  const { content, title, text } = styles;
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    if (props.rewards != "undefined" && props.rewards != null) {
      const total = props.rewards.reduce((a, b) => ({
        amount: a.amount / 1000000000000 + b.amount / 1000000000000,
      }));
      const totalUSD = numbro(
        total.amount * props.chiaPrice.usd
      ).formatCurrency({ thousandSeparated: true, mantissa: 2 });

      setSuffix(":  " + totalUSD);
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
          props.name != null
            ? props.name + suffix
            : "..." + props.launcherId.slice(-17) + suffix
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
