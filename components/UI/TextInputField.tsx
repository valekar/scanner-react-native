import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { ErrorMessage } from "formik";
import Colors from "../../constants/Colors";

const TextInputField = ({ field, form, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={field.value}
        onChangeText={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        editable={props.editable ? props.editable : true}
        {...props}
      />
      <ErrorMessage name={field.name} component={Text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.26
  },
  textInput: {
    fontSize: 18,
    textAlign: "center"
  },
  placeHolder: {}
});

export default TextInputField;
