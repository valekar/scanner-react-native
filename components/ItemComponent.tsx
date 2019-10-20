import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const ItemComponent = props => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.title}>
          <Text>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    //justifyContent: "center",
    margin: 20,
    borderRadius: 10,
    borderWidth: 0.26,
    overflow: "hidden",
    padding: 5,
    //width: "80%",
    maxHeight: 300,
    height: 100
  },
  imageContainer: {
    borderRightWidth: 0.26,
    borderRadius: 0.26,
    overflow: "hidden",
    justifyContent: "flex-start",
    height: "100%",
    width: "40%"
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 0.26
  },
  title: {
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ItemComponent;
