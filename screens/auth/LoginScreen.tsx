import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { HOME } from "../../constants/RouteConstants";
import LoginForm from "../../components/LoginForm";
const LoginScreen = props => {
  const onsubmitHanlder = values => {
    console.log(values);
    console.log("SUbmitted");
    props.navigation.navigate({ routeName: HOME });
  };

  return (
    <View style={styles.screen}>
      <KeyboardAwareScrollView enableOnAndroid>
        <LoginForm onSubmit={onsubmitHanlder} signInError={false} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default LoginScreen;
