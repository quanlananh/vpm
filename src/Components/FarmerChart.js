import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import moment from "moment";

export default function FarmerChart(props) {
  const { content, title, chart, disclaimer } = styles;

  return (
    <View style={content}>
      <Text style={title}>
        Estimated Plots for the last 10 hours from{" "}
        {moment(moment()).format("HH:mm")}
      </Text>
      <LineChart
        data={{
          labels: props.x,
          datasets: [
            {
              data: props.y,
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={230}
        // yAxisLabel={""}
        chartConfig={{
          backgroundGradientFrom: "#9be5aa",
          backgroundGradientTo: "rgba(255,207,159,0.7)",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgb(255, 135, 35, ${opacity})`,
          // fillShadowGradient: `rgb(255, 135, 35)`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={chart}
      />
      <Text style={disclaimer}>
        Rewards are not based on this estimate but rather on Partials received.
        It is expected to see the estimates vary around +/-20% on average with
        even larger occasional spikes. This is based on the Chia code and
        relates to how the pool guesstimate everyone's farm size vs true actual
        but the reward payout is based on your actual plot size as your farm
        would send partials that matches what your total farm size is.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
  },
  chart: {
    borderRadius: 0,
  },
  disclaimer: {
    padding: 15,
    fontStyle: "italic",
  },
});
