import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import LoginScreen from "./screens/Login";
import BottomTabNavigator from "./components/BottomTabNavigator";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
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

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    BottomTab: {
      screen: BottomTabNavigator
    }
  },
  {
    initialRouteName: "Login"
  }
);

  async; addPost() ;{
    if(
      history.state.caption
    ){
      let postData={
        preview_image:this.state.previewImage,
        caption: this.state.caption,
        author: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_id:firebase.auth().currentUser.uid,
        profile_image:this.state.profile_image,
        likes:0
      };
      await firebase
          .database()
          .ref(
            "/posts/" +
            Math.random()
            .toString(36)
            .slice(2)
          )
          .set(postData)
          .then(function (snapshot) { });
          this.props.setUpdateToTrue();
          this.props.navigation.navigate("Feed");
        } else{
          Alert.alert(
            "Error",
            "All field are required!",
            [{ text:"OK", onPress:() => console.log("OK Pressed") }],
            {cacelable: false}
          );
        }
}

constructor(props) ;{
  super(props);
  this.state = {
    light_theme: true,
    post_id: this.props.post.key,
    post_data: this.props.post.value
  };
}

const AppContainer = createAppContainer(AppSwitchNavigator);
