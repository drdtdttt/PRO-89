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

   componentDidMount();{
    let theme;
    firebase
    .database()
    .ref("/user/" + firebase.auth().currentUser.uid)
    .on("value", function (snapshot) {
        theme = snapshot.val().current_theme;
    });
    this.setState({ light_theme: theme === "light" ? true : false  });
    }

    render();{
        let props = this.props;
        return(
            <Drawer.Navigator
            drawerContentOption={{
                activeTintColor: "e91e63",
                inactiveTiciColor: this.state.light_theme ? "black" : "white",
                itemStyle: {marginVertical: 5},
                }}
                drawerContent={props => <CustomSidebarMenu  {...props} />}
                
                
            >

                <Drawer.screen
                name="Home"
                component={StackNavigator}
                options={{ unmountOnBlur: true}}
                />
                <Drawer.screen
                name="Profile"
                component={Profile}
                options={{ unmountOnBlur: true}}
                />
                <Drawer.screen
                name="logout"
                component={Logout}
                options={{ unmountOnBlur: true}}
                />
            </Drawer.Navigator>
        )
    }

    async; addPost() ;{
    if(this.state.caption){
    let postData = {
        preview_image:this.state.preview_image,
        caption:this.state.caption,
        author: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_uid: firebase.auth().currentUser.uid,
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
        this.props.setUpadateToTrue();
        this.props.navigation.navigate("feed");

    } else{
        Alert.alert(
            "Error",
            "All Fields are required!",
            [{ text: "OK", onPress:() => console.log("OK Pressed") } ],
            { cancelable : False}
        );
    } 
    }