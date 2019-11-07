import React from "react";

import {
  Platform,
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert
} from "react-native";
import CustomHeaderButton from "../components/UI/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import MyItem from "../models/MyItem";
import ItemComponent from "../components/ItemComponent";
import {
  SCANNER,
  CAMERA,
  IMAGE_MANIPULATOR
} from "../constants/RouteConstants";
import { RNDocScanner } from "rn-doc-scanner";
import CameraSelector from "../components/UI/CameraSelector";
//import { CAMERA } from "expo-permissions";
const MainScreen = props => {
  //const itemsData = items;
  const items: Array<MyItem> = useSelector(state => state.items.items);

  const showDetailsHanlder = () => {
    console.log("Show details");
  };

  const onPressScan = async () => {
    if (Platform.OS === "android") {
      try {
        const image = await RNDocScanner.getDocumentCrop(true);
        //Alert.alert("Heloo", "Heloo", [{ text: "Okay" }]);
        //props.navigation.navigate({ routeName: CAMERA });
        //return <CameraSelector />;

        props.navigation.navigate({
          routeName: IMAGE_MANIPULATOR,
          params: { imageCropped: image }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <ScrollView>
      <FlatList
        data={items}
        keyExtractor={item => String(item.getId())}
        renderItem={itemData => (
          <ItemComponent
            title={itemData.item.getTitle()}
            imageUrl={itemData.item.getImageUrl()}
            id={itemData.item.getId()}
            onPress={showDetailsHanlder}
            style={styles.item}
          ></ItemComponent>
        )}
      />
      <View>
        <Button title="scanner" onPress={onPressScan} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {}
});

MainScreen.navigationOptions = navData => {
  return {
    headerTitle: "Home",

    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default MainScreen;
