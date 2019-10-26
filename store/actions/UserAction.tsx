import {
  AUTHENTICATE,
  REGISTER,
  CHANGE_PASSWORD,
  UPDATE_USER
} from "../../constants/RouteConstants";
import { User } from "../../models/User";
import {
  registerUser,
  fetchUser,
  fetchAnyUser,
  updateUser,
  findUserByEmail,
  updatePassword
} from "../../helpers/db";
import $t from "../../i18n";
export const authenticateUser = (user: User) => {
  return async dispatch => {
    let authenticateUser: boolean = false;

    const result: any = await fetchUser(user);
    //console.log(result);
    if (result.rows._array.length > 0) {
      const fetchedUser = result.rows._array[0];

      //do the api calls here
      authenticateUser = true;
      dispatch({
        type: AUTHENTICATE,
        value: { isAuthenticated: authenticateUser, user: fetchedUser }
      });
    } else {
      throw new Error($t("error.user.userNotFound"));
    }
  };
};

export const registerNewUser = (user: User) => {
  return async dispatch => {
    let authenticateUser: boolean = false;
    if (user) {
      authenticateUser = true;
      // do the api call here
      const result = await registerUser(user);
      //console.log(result);
      dispatch({
        type: REGISTER,
        value: { isAuthenticated: authenticateUser, user: user }
      });
    }
  };
};

export const fetchExistingUser = () => {
  return async dispatch => {
    // get the user from local database
    const result: any = await fetchAnyUser();

    if (result.rows._array.length > 0) {
      //do an api call just to verify if user exists
      const user = result.rows._array[0];
      dispatch({
        type: AUTHENTICATE,
        value: { isAuthenticated: true, user: user }
      });
    } else {
      throw new Error($t("error.user.userNotFound"));
    }
  };
};

export const updateExistingUser = (user: User) => {
  return async dispatch => {
    const result: any = await updateUser(user);

    // console.log(result);
    if (result.rowsAffected > 0) {
      //do an api call just to verify if user exists
      const result: any = await findUserByEmail(user.email);
      if (result.rows._array.length > 0) {
        //do an api call just to verify if user exists
        const user = result.rows._array[0];
        dispatch({
          type: AUTHENTICATE,
          value: { isAuthenticated: true, user: user }
        });
      } else {
        throw new Error($t("error.user.userNotFound"));
      }
    } else {
      throw new Error($t("error.user.notUpdated"));
    }
  };
};

export const changePassword = (modUser: User) => {
  return async (dispatch, getState) => {
    // console.log("change password");
    //console.log(getState().user);
    const user: User = getState().user.user;
    if (user.password !== modUser.current_password) {
      throw new Error($t("validation.invalidCurrentPassword"));
    }
    if (modUser.new_password !== modUser.new_password_confirmation) {
      throw new Error($t("validation.passwordsMustMatch"));
    }

    const result: any = await updatePassword(modUser);
    //console.log(result);
    if (result.rowsAffected > 0) {
      const result: any = await findUserByEmail(user.email);
      //console.log(user);
      if (result.rows._array.length > 0) {
        //do an api call just to verify if user exists
        const user = result.rows._array[0];
        dispatch({
          type: CHANGE_PASSWORD,
          value: { isAuthenticated: true, user: user }
        });
      } else {
        throw new Error($t("error.user.userNotFound"));
      }
    } else {
      throw new Error($t("error.user.passwordNotUpdated"));
    }
  };
};
