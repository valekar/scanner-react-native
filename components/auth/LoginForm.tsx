import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik, Field } from "formik";
import TextInputField from "../UI/TextInputField";
import ErrorText from "../UI/ErrorText";
import $t from "../../i18n/index";
import { logInValidationRules } from "../../validation/auth";
import CustomButton from "../UI/CustomButton";
const LoginForm = props => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => props.onSubmit(values)}
      validationSchema={logInValidationRules}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.form}>
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
          </View>

          <View style={styles.button}>
            <CustomButton onPress={handleSubmit} title={$t("auth.signIn")} />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  button: { marginLeft: 20, marginRight: 20 },
  form: {
    borderWidth: 0.2,
    borderRadius: 6,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20
  }
});

export default LoginForm;
