import React from "react";
import { View, Alert } from "react-native";
const CustomAlert = props => {
  return Alert.alert(props.header, props.message, [{ text: "Okay" }]);
};

export default CustomAlert;
