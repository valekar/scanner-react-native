import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import React from "react";
import { Platform } from "react-native";
import {
  MAIN,
  LOGIN,
  AUTHENTICATE,
  HOME,
  REGISTER
} from "../constants/RouteConstants";
import LogoutScreen from "../screens/auth/LogoutScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import RegisterScreen from "../screens/auth/RegisterScreen";

const defaultNavigationOptions = {
  headerTitle: "Default Name",
  headerTitleStyle: {
    width: "100%",
    color: "white"
  },
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
    //width: "100%"
  }
};

const navigationOptions = {
  drawerIcon: drawerConfig => (
    <Ionicons
      name={Platform.OS === "android" ? "md-home" : "ios-home"}
      size={23}
      color={drawerConfig.tintColor}
    />
  )
};

const HomeNavigator = createStackNavigator(
  {
    [MAIN]: MainScreen
  },

  {
    navigationOptions: navigationOptions,
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    [HOME]: HomeNavigator
  },
  {
    contentComponent: LogoutScreen
  }
);

const AuthNavigator = createStackNavigator(
  {
    [LOGIN]: LoginScreen,
    [REGISTER]: RegisterScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const SwitchNavigator = createSwitchNavigator({
  [AUTHENTICATE]: AuthNavigator,
  Drawer: DrawerNavigator
});

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
