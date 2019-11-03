import React, { useState, useEffect, useCallback } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomCrop from "react-native-perspective-image-cropper";
import * as FileSystem from "expo-file-system";

const ImageEditorScreen = props => {
  const [rectangleCoordinates, setRectangleCoordinates] = useState({
    topLeft: { x: 10, y: 10 },
    topRight: { x: 10, y: 10 },
    bottomRight: { x: 10, y: 10 },
    bottomLeft: { x: 10, y: 10 }
  });
  const [customCrop, setCustomCrop] = useState(null);
  const [initialImage, setInitialImage] = useState();
  const [imageHeight, setImageHeight] = useState();
  const [imageWidth, setImageWidth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadImage = useCallback(async () => {
    const imageUri = props.navigation.getParam("uri");
    const image64 = await FileSystem.readAsStringAsync(imageUri, "base64");
    setImageHeight(300);
    setImageWidth(300);
    setIsLoading(false);
    return image64;
  }, [initialImage]);

  const updateImage = (image, newCoordinates) => {};

  const crop = () => {
    customCrop.crop();
  };

  useEffect(() => {
    setInitialImage(loadImage());
  }, [initialImage, imageHeight, imageWidth, isLoading]);

  return (
    <View style={styles.screen}>
      {isLoading && <Text>Image Editor</Text>}

      {!isLoading && (
        <View>
          <CustomCrop
            updateImage={updateImage}
            rectangleCoordinates={rectangleCoordinates}
            initialImage={initialImage}
            height={imageHeight}
            width={imageWidth}
            ref={ref => setCustomCrop(ref)}
            overlayColor="rgba(18,190,210, 1)"
            overlayStrokeColor="rgba(20,190,210, 1)"
            handlerColor="rgba(20,150,160, 1)"
            enablePanStrict={false}
          />

          <TouchableOpacity onPress={crop}>
            <Text>CROP IMAGE</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 0.26
  }
});

export default ImageEditorScreen;
