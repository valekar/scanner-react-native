import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import * as userActions from "../../store/actions/UserAction";
import { HOME, LOGIN } from "../../constants/RouteConstants";

const StartupScreen = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      try {
        await dispatch(userActions.fetchExistingUser());
        props.navigation.navigate({ routeName: HOME });
      } catch (err) {
        console.log(err.message);
        props.navigation.navigate({ routeName: LOGIN });
      }
    };
    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default StartupScreen;
