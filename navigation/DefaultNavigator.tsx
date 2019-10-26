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
  REGISTER,
  DRAWER,
  STARTUP,
  PROFILE,
  CHANGE_PASSWORD
} from "../constants/RouteConstants";
import LogoutScreen from "../screens/auth/LogoutScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import RegisterScreen from "../screens/auth/RegisterScreen";
import StartupScreen from "../screens/auth/StartupScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import ChangePasswordScreen from "../screens/user/ChangePasswordScreen";

const defaultNavigationOptions = {
  headerTitle: "Default Name",
  headerTitleStyle: {
    width: "100%",
    color: "white"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
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
    //[PROFILE]: ProfileScreen,
    //[CHANGE_PASSWORD]: ChangePasswordScreen
  },

  {
    navigationOptions: navigationOptions,
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const ProfileNavigator = createStackNavigator(
  {
    [PROFILE]: ProfileScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-person" : "ios-person"}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const ChangePasswordNavigator = createStackNavigator(
  {
    [CHANGE_PASSWORD]: ChangePasswordScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-settings" : "ios-settings"}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    [HOME]: HomeNavigator,
    [PROFILE]: ProfileNavigator,
    [CHANGE_PASSWORD]: ChangePasswordNavigator
  },
  {
    contentComponent: LogoutScreen,
    contentOptions: {
      activeTintColor: Colors.primary
    }
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
  [STARTUP]: StartupScreen,
  [AUTHENTICATE]: AuthNavigator,
  [DRAWER]: DrawerNavigator
});

const MainNavigator = createAppContainer(SwitchNavigator);

export default MainNavigator;
