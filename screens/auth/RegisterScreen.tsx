import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RegisterForm from "../../components/auth/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { User } from "../../models/User";
import { useDispatch } from "react-redux";
import * as userActions from "../../store/actions/UserAction";
import { HOME } from "../../constants/RouteConstants";

const RegisterScreen = props => {
  const dispatch = useDispatch();
  const registerHandler = async (values: User) => {
    //console.log("Registration");
    //console.log(values);
    await dispatch(userActions.registerNewUser(values));
    props.navigation.navigate({ routeName: HOME });
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
