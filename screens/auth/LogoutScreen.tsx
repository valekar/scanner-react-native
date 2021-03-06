import React from "react";
import { Button, StyleSheet } from "react-native";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { LOGIN } from "../../constants/RouteConstants";
import CustomButton from "../../components/UI/CustomButton";
import $t from "../../i18n/index";
const LogoutScreen = props => (
  <SafeAreaProvider>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerNavigatorItems {...props} />

      <CustomButton
        onPress={() => {
          props.navigation.navigate({ routeName: LOGIN });
        }}
        title={$t("auth.logOut")}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {}
});

export default LogoutScreen;
