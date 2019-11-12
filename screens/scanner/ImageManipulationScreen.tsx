import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
const ImageManipulationScreen = props => {
  const cropped = props.navigation.getParam("imageCropped");
  const coordinates = props.navigation.getParam("coordinates");
  return (
    <View style={styles.screen}>
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={200}
        imageHeight={200}
      >
        <Image style={{ width: 200, height: 200 }} source={{ uri: cropped }} />
      </ImageZoom>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    height: "100%",
    width: "100%"
  }
});

export default ImageManipulationScreen;
