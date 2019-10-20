import React from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation/DefaultNavigator";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ItemReducer from "./store/reducers/ItemReducer";

const rootReducer = combineReducers({
  items: ItemReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
