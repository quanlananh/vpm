import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import ToDo from "../Pages/ToDo";
import Search from "../Pages/Search";
import { Linking } from "react-native";
import { discordURL } from "../Utils/Constants";
import Tab from "./Tab";
import { MaterialIcons } from "@expo/vector-icons";

const DN = createDrawerNavigator();
const Drawer = () => {
  return (
    <DN.Navigator
      screenOptions={{
        lazy: false,
        drawerActiveTintColor: "rgb(255, 135, 35)",
        drawerInactiveTintColor: "white",
        drawerType: "slide",
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "black",
          width: 265,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <DN.Screen
        name="Welcome to Vast Pool"
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={18} />
          ),
        }}
        component={Tab}
      />

      <DN.Screen name="Search" component={Search} />
      <DN.Screen name="Terms" component={ToDo} />
      <DN.Screen name="Privacy" component={ToDo} />
      <DN.Screen name="News" component={ToDo} />
      <DN.Screen name="About Us" component={ToDo} />
      <DN.Screen name="Contact Us" component={ToDo} />
      <DN.Screen name="Service Status" component={ToDo} />
      <DN.Screen name="FAQ" component={ToDo} />
    </DN.Navigator>
  );
};

// set up custom links for main navigation drawer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Discord"
        inactiveTintColor={"white"}
        onPress={() => Linking.openURL(discordURL)}
      />
    </DrawerContentScrollView>
  );
}

export default Drawer;
