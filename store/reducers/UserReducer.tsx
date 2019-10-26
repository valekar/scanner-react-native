import {
  AUTHENTICATE,
  IS_AUTHENTICATED,
  REGISTER,
  UPDATE_USER,
  CHANGE_PASSWORD
} from "../../constants/RouteConstants";
import { User } from "../../models/User";

export interface UserInitialState {
  isAuthenticated: boolean;
  user: any;
}

const initialState: UserInitialState = {
  isAuthenticated: false,
  user: {}
};

interface AuthenticateAction {
  type: String;
  value: AuthenticateValue;
}

interface AuthenticateValue {
  isAuthenticated: boolean;
  user: User;
}

export default (state = initialState, action: AuthenticateAction) => {
  let typeValues: AuthenticateValue = action.value;
  switch (action.type) {
    case AUTHENTICATE: {
      //let typeValues: AuthenticateValue = action.value;
      if (typeValues.isAuthenticated) {
        //console.log(typeValues);
        return {
          ...state,
          user: typeValues.user,
          isAuthenticated: typeValues.isAuthenticated
        };
      }
    }

    case REGISTER: {
      return {
        ...state,
        user: typeValues.user,
        isAuthenticated: typeValues.isAuthenticated
      };
    }

    case UPDATE_USER: {
      return {
        ...state,
        user: typeValues.user,
        isAuthenticated: typeValues.isAuthenticated
      };
    }

    case CHANGE_PASSWORD: {
      return {
        ...state,
        user: typeValues.user,
        isAuthenticated: typeValues.isAuthenticated
      };
    }

    default: {
      return state;
    }
  }
};
