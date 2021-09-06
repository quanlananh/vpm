import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import moment from "moment";

export default function FarmerPayoutChart(props) {
  const { content, title, chart } = styles;

  return (
    <View style={content}>
      <Text style={title}>
        Seven Most Recent Payouts since {moment(moment()).format("MM/DD HH:mm")}
      </Text>
      <BarChart
        style={chart}
        data={{
          labels: props.x,
          datasets: [
            {
              data: props.y,
            },
          ],
        }}
        showBarTops={false}
        width={Dimensions.get("window").width}
        height={230}
        chartConfig={chartConfig}
      />
    </View>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#9be5aa",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "rgba(255,207,159,0.7)",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgb(255, 135, 35, ${opacity})`,
  barPercentage: 0.6,
  fillShadowGradient: `rgb(255, 135, 35)`,
  fillShadowGradientOpacity: 1,
};

const styles = StyleSheet.create({
  content: {
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
  },
  chart: {
    borderRadius: 0,
  },
});
