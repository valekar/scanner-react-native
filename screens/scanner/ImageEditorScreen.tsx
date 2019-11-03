import React, { useState, useEffect, useCallback } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomCrop from "react-native-perspective-image-cropper";
import * as FileSystem from "expo-file-system";
import ImgToBase64 from "react-native-image-base64";
const ImageEditorScreen = props => {
  const [rectangleCoordinates, setRectangleCoordinates] = useState({
    topLeft: { x: 100, y: 100 },
    topRight: { x: 500, y: 100 },
    bottomRight: { x: 500, y: 500 },
    bottomLeft: { x: 100, y: 500 }
  });

  const imageUri = props.navigation.getParam("uri");

  const [customCrop, setCustomCrop] = useState();
  const [initialImage, setInitialImage] = useState();
  const [imageHeight, setImageHeight] = useState();
  const [imageWidth, setImageWidth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loadImage = useCallback(async () => {
    await Image.getSize(
      imageUri,
      (width, height) => {
        setImageHeight(height);
        setImageWidth(width);
        setInitialImage(imageUri);
      },
      err => {}
    );

    setIsLoading(false);
  }, [initialImage, imageWidth, imageHeight, isLoading, customCrop]);

  const updateImage = (image, newCoordinates) => {
    setRectangleCoordinates(newCoordinates);
  };

  const crop = () => {
    console.log();
    customCrop.crop();
  };

  useEffect(() => {
    loadImage();
  }, [initialImage, imageHeight, imageWidth, isLoading, customCrop]);

  return (
    <View style={styles.screen}>
      {isLoading && <Text>Image Editor {initialImage}</Text>}

      {!isLoading && (
        <View>
          <Text>Image Editor </Text>
          <CustomCrop
            updateImage={updateImage}
            rectangleCoordinates={rectangleCoordinates}
            initialImage={initialImage}
            height={imageHeight}
            width={imageWidth}
            ref={(ref: any) => setCustomCrop(ref)}
            overlayColor="rgba(18,190,210, 1)"
            overlayStrokeColor="rgba(20,190,210, 1)"
            handlerColor="rgba(20,150,160, 1)"
            enablePanStrict={true}
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
