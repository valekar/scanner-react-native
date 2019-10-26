import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik, Field } from "formik";
import TextInputField from "../UI/TextInputField";
import $t from "../../i18n/index";
import { profileValidationRules } from "../../validation/auth";
import CustomButton from "../UI/CustomButton";
import { useSelector } from "react-redux";

const ProfileForm = props => {
  const user = useSelector(state => state.user.user);
  //console.log(user);

  return (
    <Formik
      initialValues={{
        email: user.email,
        password: "",
        first_name: user.first_name,
        last_name: user.last_name
      }}
      onSubmit={values => props.onSubmit(values)}
      validationSchema={profileValidationRules}
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
          </View>
          <View style={styles.button}>
            <CustomButton
              onPress={handleSubmit}
              title={$t("profile.updateUser.updateProfile")}
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

export default ProfileForm;
