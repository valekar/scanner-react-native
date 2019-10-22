import React from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { HOME } from "../../constants/RouteConstants";
import LoginForm from "../../components/LoginForm";
import Colors from "../../constants/Colors";
const LoginScreen = props => {
  const onsubmitHanlder = values => {
    console.log(values);
    console.log("SUbmitted");
    props.navigation.navigate({ routeName: HOME });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>DRAFTS</Text>
        </View>
        <KeyboardAwareScrollView enableOnAndroid>
          <LoginForm onSubmit={onsubmitHanlder} signInError={false} />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 0
    //backgroundColor: Colors.secondary
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    marginTop: 50,
    margin: 20,
    //borderWidth: 0.26,
    shadowOpacity: 1,
    shadowOffset: { width: 100, height: 100 },
    shadowColor: "black"
  },
  text: {
    fontSize: 26
  }
});

export default LoginScreen;
