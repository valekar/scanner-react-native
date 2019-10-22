import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
