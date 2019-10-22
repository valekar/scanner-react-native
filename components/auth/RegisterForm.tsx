import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik, Field } from "formik";
import TextInputField from "../UI/TextInputField";
import ErrorText from "../UI/ErrorText";
import $t from "../../i18n/index";
import { logInValidationRules } from "../../validation/auth";
import CustomButton from "../UI/CustomButton";
import { LOGIN } from "../../constants/RouteConstants";
const RegisterForm = props => {
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
              name="first_name"
              component={TextInputField}
              placeholder={$t("auth.enterFirstName")}
            />
            <Field
              name="last_name"
              component={TextInputField}
              placeholder={$t("auth.enterLastName")}
            />
            <Field
              name="email"
              component={TextInputField}
              placeholder={$t("auth.enterEmail")}
            />
            <ErrorText
              error={!!props.signUpErrors.email}
              message={props.signUpErrors.email}
            />
            <Field
              name="password"
              component={TextInputField}
              secureTextEntry
              placeholder={$t("auth.enterPassword")}
            />
            <Field
              name="confirm_password"
              component={TextInputField}
              secureTextEntry
              placeholder={$t("auth.confirmPassword")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <CustomButton
                onPress={() => {
                  props.navigation.goBack();
                }}
                title={$t("common.back")}
              />
            </View>
            <View style={styles.button}>
              <CustomButton
                onPress={handleSubmit.bind(this)}
                title={$t("auth.register")}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  button: {
    //alignItems: "center",
    //justifyContent: "center",
    //width: "80%"
    flex: 1
  },
  form: {
    borderWidth: 0.2,
    borderRadius: 6,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20
  },

  buttonContainer: {
    flexDirection: "row",
    // width: "100%"
    alignItems: "center"
    //justifyContent: "space-evenly"
  }
});

export default RegisterForm;
