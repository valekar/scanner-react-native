import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ErrorText = props => {
  return (
    <View style={styles.container}>
      <Text>{props.error ? props.message : ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ErrorText;
