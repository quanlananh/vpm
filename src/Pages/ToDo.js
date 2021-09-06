import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Header from "../Components/Header";
import { MaterialIcons } from "@expo/vector-icons";

const TN = createMaterialBottomTabNavigator();
const ToDo = () => {
  return (
    <TN.Navigator
      activeColor="rgb(255, 135, 35)"
      barStyle={{ backgroundColor: "black" }}
    >
      <TN.Screen
        name="Under Construction"
        component={Header}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="construction" color={color} size={26} />
          ),
        }}
      />
    </TN.Navigator>
  );
};

export default ToDo;
