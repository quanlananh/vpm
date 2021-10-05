import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import moment from "moment";
import {
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryLabel,
  VictoryChart,
  VictoryArea,
} from "victory-native";
import { Defs, LinearGradient, Stop } from "react-native-svg";

const styles = StyleSheet.create({
  content: {
    marginTop: 5,
    marginRight: -5,
  },
  title: {
    fontWeight: "bold",
  },
});

export default class PoolSpaceD3Chart extends React.Component {
  render() {
    const { content, title, chart } = styles;
    return (
      <View style={content}>
        <VictoryChart
          containerComponent={
            <VictoryVoronoiContainer labels={({ datum }) => `${datum.y} PiB`} />
          }
          animate={{ duration: 3000 }}
          padding={{ top: 35, bottom: 30, left: 30, right: 30 }}
          height={230}
          width={Dimensions.get("window").width}
        >
          <VictoryAxis tickLabelComponent={<VictoryLabel angle={-45} />} />
          <VictoryAxis dependentAxis />
          <Defs>
            <LinearGradient id="gradientStroke">
              <Stop offset="0%" stopColor="rgba(255,207,159,0.7)" />
              <Stop offset="100%" stopColor="#9be5aa" />
            </LinearGradient>
          </Defs>
          <VictoryLabel
            style={title}
            x={40}
            y={40}
            text="Recent Pool Space (PiB)"
          />
          <VictoryArea
            size={this.state.size}
            data={this.state.data}
            interpolation="natural"
            style={{
              data: {
                fill: "url(#gradientStroke)",
                stroke: "darkgreen",
              },
            }}
            animate={{
              animationWhitelist: ["style", "data"],
              onExit: {
                duration: 1000,
                before: () => ({ opacity: 0.3, _y: 0 }),
              },
              onEnter: {
                duration: 1000,
                before: () => ({ opacity: 0.3, _y: 0 }),
                after: (datum) => ({ opacity: 1, _y: datum._y }),
              },
            }}
          />
        </VictoryChart>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    const x = this.props.x;
    const y = this.props.y;
    let data = [];
    for (let i = 0; i < x.length; i += Math.floor(Math.random() * 3 + 5)) {
      // random number between 5 and 7)
      data.push({ x: moment(x[i]).format("MM-DD"), y: y[i] });
    }
    data.push({
      x: moment(x[x.length - 1]).format("MM-DD"),
      y: y[x.length - 1],
    });
    return data;
  }
}
