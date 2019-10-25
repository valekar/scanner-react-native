import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RegisterForm from "../../components/auth/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = props => {
  const registerHandler = values => {
    console.log("triggered");
    console.log(values);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>REGISTER TO DRAFTS</Text>
        </View>
        <KeyboardAwareScrollView enableOnAndroid>
          <RegisterForm
            onSubmit={registerHandler}
            signUpErrors={false}
            navigation={props.navigation}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    marginTop: 50,
    margin: 20
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 26
  }
});

export default RegisterScreen;
