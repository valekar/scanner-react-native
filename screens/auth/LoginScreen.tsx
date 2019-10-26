import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { HOME, REGISTER } from "../../constants/RouteConstants";
import LoginForm from "../../components/auth/LoginForm";
import CustomButton from "../../components/UI/CustomButton";
import $t from "../../i18n";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../store/actions/UserAction";
import { User } from "../../models/User";
import CustomAlert from "../../components/UI/CustomAlert";

const LoginScreen = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const onsubmitHandler = async (values: User) => {
    try {
      await dispatch(userActions.authenticateUser(values));
      props.navigation.navigate({ routeName: HOME });
    } catch (err) {
      CustomAlert({
        header: err.message,
        message: $t("error.user.invalidCredentials")
      });
      console.log(err.message);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>DRAFTS</Text>
        </View>
        <KeyboardAwareScrollView enableOnAndroid>
          <LoginForm onSubmit={onsubmitHandler} signInError={false} />
          <View style={styles.button}>
            <CustomButton
              onPress={() => {
                props.navigation.navigate({ routeName: REGISTER });
              }}
              title={$t("auth.register")}
            />
          </View>
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
  button: { marginLeft: 20, marginRight: 20 },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    marginTop: 50,
    margin: 20,
    paddingBottom: 30,
    shadowOpacity: 1,
    shadowOffset: { width: 100, height: 100 },
    shadowColor: "black"
    //borderRadius: 6,
    //borderWidth: 0.26
  },
  text: {
    fontSize: 26
  }
});

export default LoginScreen;
