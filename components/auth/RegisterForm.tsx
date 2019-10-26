import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik, Field } from "formik";
import TextInputField from "../UI/TextInputField";
import ErrorText from "../UI/ErrorText";
import $t from "../../i18n/index";
import { registrationValidationRules } from "../../validation/auth";
import CustomButton from "../UI/CustomButton";

const RegisterForm = props => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => props.onSubmit(values)}
      validationSchema={registrationValidationRules}
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
              name="confirm_email"
              component={TextInputField}
              placeholder={$t("auth.confirmEmail")}
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
                onPress={handleSubmit}
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
    alignItems: "center"
  }
});

export default RegisterForm;
