import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Header from "../Components/Header";
import Leaderboard from "../Pages/Leaderboard";
import { MaterialIcons } from "@expo/vector-icons";

const TN = createMaterialBottomTabNavigator();
const Tab = () => {
  return (
    <TN.Navigator
      activeColor="rgb(255, 135, 35)"
      barStyle={{ backgroundColor: "black" }}
    >
      <TN.Screen
        name="Home"
        component={Header}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <TN.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="leaderboard" color={color} size={26} />
          ),
        }}
      />
    </TN.Navigator>
  );
};

export default Tab;
