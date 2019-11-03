import React from "react";
import { Camera } from "expo-camera";
import { StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

const { FlashMode: CameraFlashModes } = Camera.Constants;

const ToolBar = ({
  flashMode = CameraFlashModes.off,
  setFlashMode,
  onShortCapture
}) => {
  return (
    <Grid style={styles.bottomToolbar}>
      <Row>
        <Col style={styles.alignCenter}>
          <TouchableOpacity
            onPress={() =>
              setFlashMode(
                flashMode === CameraFlashModes.on
                  ? CameraFlashModes.off
                  : CameraFlashModes.on
              )
            }
          >
            <Ionicons
              name={
                flashMode == CameraFlashModes.on ? "md-flash" : "md-flash-off"
              }
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </Col>
        <Col size={2} style={styles.alignCenter}>
          <TouchableWithoutFeedback onPress={onShortCapture}>
            <View style={[styles.captureBtn]}>
              <Ionicons name="ios-camera" color="white" size={50} />
            </View>
          </TouchableWithoutFeedback>
        </Col>
        <Col style={styles.alignCenter}></Col>
      </Row>
    </Grid>
  );
};

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomToolbar: {
    width: Dimensions.get("window").width,
    position: "absolute",
    height: 100,
    bottom: 0
  },
  captureBtn: {
    width: 60,
    height: 60,
    //borderWidth: 2,
    //borderRadius: 60,
    //borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  captureBtnActive: {
    width: 80,
    height: 80
  },
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: "red",
    borderColor: "transparent"
  }
});

export default ToolBar;
