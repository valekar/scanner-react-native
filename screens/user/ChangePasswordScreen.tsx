import React from "react";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ProfileForm from "../../components/user/ProfileForm";
import ChangePasswordForm from "../../components/user/ChangePasswordForm";
import * as userActions from "../../store/actions/UserAction";
import { useDispatch } from "react-redux";
import CustomAlert from "../../components/UI/CustomAlert";
import $t from "../../i18n";
import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_HEADER,
  HOME
} from "../../constants/RouteConstants";
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const ChangePasswordScreen = props => {
  const dispatch = useDispatch();
  const changePasswordHandler = async values => {
    //console.log(values);
    try {
      await dispatch(userActions.changePassword(values));
      CustomAlert({
        header: $t("profile.changePassword.changePassword"),
        message: $t("profile.changePassword.changedUserPassword")
      });
      props.navigation.navigate({ routeName: HOME });
    } catch (err) {
      CustomAlert({
        header: $t("profile.changePassword.changePasswordFail"),
        message: err.message
      });
    }
  };

  return (
    <View style={styles.screen}>
      <View>
        <KeyboardAwareScrollView enableOnAndroid>
          <ChangePasswordForm
            onSubmit={changePasswordHandler}
            signUpErrors={false}
            navigation={props.navigation}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

ChangePasswordScreen.navigationOptions = navData => {
  return {
    headerTitle: CHANGE_PASSWORD_HEADER,
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

export default ChangePasswordScreen;
