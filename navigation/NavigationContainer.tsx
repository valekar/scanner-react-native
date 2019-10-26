import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavigationActions } from "react-navigation";

import MainNavigator from "./DefaultNavigator";
import { LOGIN } from "../constants/RouteConstants";

const NavigationContainer = props => {
  const navRef: any = useRef();
  const isAuth = useSelector(state => state.user.isAuthenticated);
  //console.log("navigation contianeer");

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(NavigationActions.navigate({ routeName: LOGIN }));
    }
  }, [isAuth]);

  return <MainNavigator ref={navRef} />;
};

export default NavigationContainer;
