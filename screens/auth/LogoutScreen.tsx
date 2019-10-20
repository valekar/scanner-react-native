import React from "react";
import { Button, StyleSheet } from "react-native";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { LOGIN } from "../../constants/RouteConstants";

const LogoutScreen = props => (
  <SafeAreaProvider>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerNavigatorItems {...props} />
      <Button
        title="Logout"
        onPress={() => {
          props.navigation.navigate({ routeName: LOGIN });
        }}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {}
});

export default LogoutScreen;
