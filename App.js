import React from "react";
import { Provider } from "react-redux";
import Store from "./src/Store";
import { Info } from "./src/Components";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/Routes/Drawer";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Info />
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}
