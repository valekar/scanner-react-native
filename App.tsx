import React from "react";
import { StyleSheet } from "react-native";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ItemReducer from "./store/reducers/ItemReducer";
import UserReducer from "./store/reducers/UserReducer";
import ReduxThunk from "redux-thunk";
import MainNavigator from "./navigation/DefaultNavigator";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("initialized database");
  })
  .catch(err => {
    console.log("initialiing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  items: ItemReducer,
  user: UserReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
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
