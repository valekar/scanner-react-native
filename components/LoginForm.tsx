import React from "react";
import { TouchableOpacity, View, Text, Button } from "react-native";
import { Formik, Field } from "formik";
import TextInputField from "../components/UI/TextInputField";
import ErrorText from "../components/UI/ErrorText";
import $t from "../i18n/index";
import { logInValidationRules } from "../validation/auth";
const LoginForm = props => {
  const submitHandler = () => {
    console.log("in Login form");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => props.onSubmit(values)}
      validationSchema={logInValidationRules}
    >
      {({ handleSubmit }) => (
        <View>
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
          <Button title={$t("auth.signIn")} onPress={handleSubmit.bind(this)} />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
