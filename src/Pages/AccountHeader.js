import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import numbro from "numbro";

export default function AccountHeader(props) {
  const { content, title } = styles;
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    if (props.rewards != "undefined" && props.rewards != null) {
      const total = props.rewards.reduce((a, b) => ({
        amount: a.amount / 1000000000000 + b.amount / 1000000000000,
      }));
      const totalUSD = numbro(
        total.amount * props.chiaPrice.usd
      ).formatCurrency({ mantissa: 2 });

      setSuffix(":  " + totalUSD);
    }
  });

  return (
    <Appbar.Header style={content}>
      <Appbar.BackAction
        color={"white"}
        onPress={() => {
          props.setShowAccount(false);
        }}
      />
      <Appbar.Content
        titleStyle={title}
        color={"white"}
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
  title: { fontSize: 13.7, fontWeight: "bold" },
});
