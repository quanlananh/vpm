import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import ToDo from "../Pages/ToDo";
import { Linking, StatusBar } from "react-native";
import { discordURL } from "../Utils/Constants";
import Tab from "./Tab";
import { MaterialIcons } from "@expo/vector-icons";

const DN = createDrawerNavigator();
const Drawer = () => {
  StatusBar.setHidden(true);
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
      // initialRouteName='Home'
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
        // options={({ route }) => ({
        //   headerTitle: getHeaderTitle(route)
        // })}
      />
      <DN.Screen name="Search" component={ToDo} />
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

// function getHeaderTitle(route) {
//   const routeName = route.state ? route.state.routes[route.state.index].name : route.params?.screen || 'Welcome to Vast Pool';

//   switch (routeName) {
//     case 'Welcome to Vast Pool':
//       return 'Welcome to Vast Pool';
//     case 'Leaderboard':
//       return 'Leaderboard';
//   }
// }

export default Drawer;
