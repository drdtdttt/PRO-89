import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import LoginScreen from "./screens/Login";
import BottomTabNavigator from "./components/BottomTabNavigator";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class LoginScreen extends Component{
    constructor() {
        super();
        this.state = {
          fontLoaded: false
        };
      }
      async loadFonts() {
        await Font.loadAsync({
          Rajdhani_600SemiBold: Rajdhani_600SemiBold
        });
        this.setState({ fontLoaded: true });
      }

}
 fetchUser = () => {
    let theme;
    firebase
        .database()
        .ref("/users/" + firebase.auth().currentUser.uid)
        .on("value", (snapshot) => {
            theme = snapshot.val().current_theme
            this.setState({light_theme : theme === "light" })
        })
    

}

postCardLight: {
    margin: RFValue(20),
    backgroundColor; "#eaeaea",
    borderRadius; RFValue(20)
}

authorNameText: {
    color:"white",
    fontSize;RFValue
}
authorNameTextLight: {
    color:"black",
    fontSize;RFValue 
}