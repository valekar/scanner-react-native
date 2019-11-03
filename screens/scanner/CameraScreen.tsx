import React, { useState } from "react";
import { View, Text } from "react-native";
import CameraSelector from "../../components/UI/CameraSelector";

const CameraScreen = props => {
  return (
    <View>
      <CameraSelector navigation={props.navigation} />
    </View>
  );
};

CameraScreen.navigationOptions = navdata => {
  return {
    header: null
  };
};

export default CameraScreen;
