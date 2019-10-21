import React from "react";
import { Text } from "react-native";

const ErrorText = props => {
  return <Text>{props.error ? props.message : ""}</Text>;
};

export default ErrorText;
