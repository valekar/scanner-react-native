import React from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ProfileForm from "../../components/user/ProfileForm";
import * as userActions from "../../store/actions/UserAction";
import { useDispatch } from "react-redux";
import CustomAlert from "../../components/UI/CustomAlert";
import $t from "../../i18n";
import { useSelector } from "react-redux";
import { User } from "../../models/User";
import { UPDATE_PROFILE, HOME } from "../../constants/RouteConstants";
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
const ProfileScreen = props => {
  const dispatch = useDispatch();
  const user: User = useSelector(state => state.user.user);
  const profileHandler = async values => {
    if (
      user.first_name !== values.first_name ||
      user.last_name !== values.last_name
    ) {
      try {
        await dispatch(userActions.updateExistingUser(values));
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
    }
  };

  return (
    <ScrollView style={styles.screen}>
      <View>
        <KeyboardAwareScrollView enableOnAndroid>
          <ProfileForm
            onSubmit={profileHandler}
            signUpErrors={false}
            navigation={props.navigation}
          />
        </KeyboardAwareScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

ProfileScreen.navigationOptions = navData => {
  return {
    headerTitle: UPDATE_PROFILE,
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

export default ProfileScreen;
