import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment';

export default function FarmerChart(props) {
  const { content, title, chart } = styles;

  return (
    <View style={content}>
      <Text style={title}>Estimated Plots for the last 10 hours from {moment(moment()).format('HH:mm')}</Text>
      <LineChart
        data={{
          labels: props.x,
          datasets: [
            {
              data: props.y
            }
          ]
        }}
        width={Dimensions.get('window').width}
        height={230}
        // yAxisLabel={""}
        chartConfig={{
          backgroundGradientFrom: '#9be5aa',
          backgroundGradientTo: 'rgba(255,207,159,0.7)',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgb(255, 135, 35, ${opacity})`
          // fillShadowGradient: `rgb(255, 135, 35)`,
          // style: {
          //   borderRadius: 16,
          // },
        }}
        bezier
        style={chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  chart: {
    borderRadius: 0
  }
});
