import React, { useState } from "react";
import { TouchableOpacity, View, Text, Button, StyleSheet } from "react-native";
import { Formik, Field } from "formik";
import TextInputField from "../components/UI/TextInputField";
import ErrorText from "../components/UI/ErrorText";
import $t from "../i18n/index";
import { logInValidationRules } from "../validation/auth";
import CustomButton from "./UI/CustomButton";
const LoginForm = props => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => props.onSubmit(values)}
      validationSchema={logInValidationRules}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Field
            name="email"
            component={TextInputField}
            placeholder={$t("auth.enterEmail")}
          />
          <Field
            name="password"
            component={TextInputField}
            secureTextEntry
            placeholder={$t("auth.enterPassword")}
          />
          <ErrorText
            error={!!props.signInError}
            message={$t("auth.invalidCredentials")}
          />
          <View style={styles.submit}>
            <CustomButton
              onPress={handleSubmit.bind(this)}
              title={$t("auth.signIn")}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  submit: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20
  },
  container: {
    marginTop: 50
  },
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center"
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: "#202646",
    borderRadius: 5
  }
});

export default LoginForm;
