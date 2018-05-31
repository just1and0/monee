import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
import Profile from "./Bank.js";
import SideBar from "./components/Menu.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Dashboard: { screen: Dashboard },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;