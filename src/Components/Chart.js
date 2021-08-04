import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function Chart() {
  return (
    <View>
      {/* <Text>Recent Pool Netspace</Text> */}
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
            }
          ]
        }}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          backgroundColor: '#9be5aa',
          backgroundGradientFrom: '#9be5aa',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          //   marginVertical: 8,
          //   borderRadius: 16,
          margin: 10
        }}
      />
    </View>
  );
}
