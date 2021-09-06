import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { Tabs, TabScreen } from "react-native-paper-tabs";
import FarmerStats from "./FarmerStats";
import FarmerPayout from "./FarmerPayout";
import FarmerPartial from "./FarmerPartial";

function FarmerEarning(props) {
  const { content, title, chart } = styles;

  return (
    <PaperProvider theme={theme}>
      <Tabs uppercase={true}>
        <TabScreen label="Rewards" icon="currency-usd">
          <ScrollView>
            <FarmerStats launcherId={props.launcherId} />
          </ScrollView>
        </TabScreen>
        <TabScreen label="Payouts" icon="credit-card-settings-outline">
          <ScrollView>
            <FarmerPayout launcherId={props.launcherId} />
          </ScrollView>
        </TabScreen>
        <TabScreen label="Partials" icon="camera-metering-partial">
          <ScrollView>
            <FarmerPartial launcherId={props.launcherId} />
          </ScrollView>
        </TabScreen>
      </Tabs>
    </PaperProvider>
  );
}

export default React.memo(FarmerEarning);

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 135, 35)",
    accent: "#f1c40f",
  },
};

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flex: 1,
    color: "green",
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
