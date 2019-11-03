import React, { useState } from "react";
import { RNDocScanner } from "rn-doc-scanner";
import { View, Image, TouchableOpacity, Text, Platform } from "react-native";
import DocumentScanner from "react-native-document-scanner";
const ScannerScreen = props => {
  const onPressScan = async () => {
    if (Platform.OS === "android") {
      try {
        const image = await RNDocScanner.getDocumentCrop(true);
        console.log(image);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <TouchableOpacity onPress={onPressScan}>
      <Text>Scan</Text>
    </TouchableOpacity>
  );
};

export default ScannerScreen;
