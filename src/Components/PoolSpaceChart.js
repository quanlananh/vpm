import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import moment from "moment";

export default function PoolSpaceChart(props) {
  const { content, title, chart } = styles;
  const x = props.x;

  return (
    <View style={content}>
      <Text style={title}>Recent Pool Space</Text>
      <LineChart
        data={{
          labels: [x[0], ...x.filter((e, i) => i % 7 === 6), x[x.length - 1]],
          datasets: [
            {
              data: props.y,
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={230}
        yAxisLabel={"PiB-"}
        verticalLabelRotation={335}
        chartConfig={{
          backgroundGradientFrom: "#9be5aa",
          backgroundGradientTo: "rgba(255,207,159,0.7)",
          decimalPlaces: 0,
          color: (opacity = 255) => `rgb(0, 0, 0, ${opacity})`,
          strokeWidth: 1.5,
        }}
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        withOuterLines={true}
        bezier
        style={chart}
      />
    </View>
  );
}

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
