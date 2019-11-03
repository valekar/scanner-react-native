import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import CustomButton from "./CustomButton";
import ToolBar from "./ToolBar";
import { IMAGE_EDITOR } from "../../constants/RouteConstants";

const CameraSelector = props => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [camera, setCamera] = useState(null);
  const [captures, setCaptures] = useState([]);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

  const handleShortCapture = async () => {
    const photoData = await camera.takePictureAsync();
    console.log(photoData);
    props.navigation.navigate({
      routeName: IMAGE_EDITOR,
      params: { uri: photoData.uri }
    });
    //setCaptures([photoData, ...captures]);
  };

  const permissionHandler = useCallback(async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasPermissions(status === "granted");
  }, [hasPermissions]);

  useEffect(() => {
    permissionHandler();
  }, [hasPermissions, camera, captures]);

  return (
    <View>
      {hasPermissions && (
        <View>
          <Camera
            style={styles.preview}
            ref={camera => {
              setCamera(camera);
            }}
          >
            <ToolBar
              flashMode={flashMode}
              setFlashMode={setFlashMode}
              onShortCapture={handleShortCapture}
            />
          </Camera>
        </View>
      )}

      {!hasPermissions && <Text> Access to Camera Denied</Text>}
    </View>
  );
};

export default CameraSelector;

const styles = StyleSheet.create({
  preview: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});
