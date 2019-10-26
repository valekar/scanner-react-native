import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik, Field } from "formik";
import TextInputField from "../UI/TextInputField";
import $t from "../../i18n/index";
import { changePasswordValidationRules } from "../../validation/auth";
import CustomButton from "../UI/CustomButton";
import { useSelector } from "react-redux";

const ChangePasswordForm = props => {
  const user = useSelector(state => state.user.user);
  return (
    <Formik
      initialValues={{
        email: user.email,
        password: "",
        confirm_password: "",
        current_password: ""
      }}
      onSubmit={values => props.onSubmit(values)}
      validationSchema={changePasswordValidationRules}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.form}>
            <Field
              name="current_password"
              component={TextInputField}
              secureTextEntry
              placeholder={$t("profile.changePassword.currentPassword")}
            />
            <Field
              name="new_password"
              component={TextInputField}
              secureTextEntry
              placeholder={$t("auth.enterPassword")}
            />
            <Field
              name="new_password_confirmation"
              component={TextInputField}
              secureTextEntry
              placeholder={$t("auth.confirmPassword")}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              onPress={handleSubmit}
              title={$t("profile.changePassword.changePassword")}
            />
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
    //flex: 1
    marginHorizontal: 50
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

export default ChangePasswordForm;
