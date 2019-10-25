import { AUTHENTICATE, IS_AUTHENTICATED } from "../../constants/RouteConstants";
import { User } from "../../models/User";

export const authenticateUser = (user: User) => {
  return async dispatch => {
    let authenticateUser: boolean = false;
    if (user) {
      //do the api calls here
      authenticateUser = true;
      dispatch({
        type: AUTHENTICATE,
        value: { isLoggedIn: authenticateUser, user: user }
      });
    }
    dispatch({
      type: AUTHENTICATE,
      value: { isAuthenticated: authenticateUser }
    });
  };
};
