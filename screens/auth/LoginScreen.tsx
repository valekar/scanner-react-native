import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { HOME } from "../../constants/RouteConstants";
const LoginScreen = props => {
  const loginHandler = () => {
    props.navigation.navigate({ routeName: HOME });
  };

  return (
    <View style={styles.screen}>
      <Text>Login Sceen</Text>
      <Button title="Login" onPress={loginHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default LoginScreen;
