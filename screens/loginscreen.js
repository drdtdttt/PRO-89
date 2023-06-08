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

render() ;{
    if(!this.state.fontsloaded) {
      return <Apploading/>;
    } else{
      return(
        <View
        style ={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Button
          title="sign in with google"
          onPress={() => this.signInWithGoogleAsync()}></Button>
  
        </View>
      )
    }

}

return(
<View style={styles.container}>
<SafeAreaView style={styles.droidSafeArea}/>
<View style={styles.appTitle}>
<Image
source={require("../assets/logo.png")}
style={styles.appIcon}></Image>
<Text style={styles.appTitleText}>{'Story Telling\nApp'}</Text>
    
<View style={styles.button.Container}>
<TouchableOpacity
  style={styles.button}
    onPress={() => this.signInWithGoogleAsync()}>
    <Image
    source={require("../assets/google_icon.png")}
    style={styles.googleIcon}></Image>
    <Text style= {styles.googleText}>Sign in with google</Text>
    </TouchableOpacity>
    
    </View>
    <View style={styles.cloudContainer}>
    <Image
    source={require("../assets/clouds.png")}
    style={styles.cloudImage}
    ></Image>

    </View>
    </View>       
  </View>
    );

    toggleSwitch();{
      const previous_state=this.state.isEnabled;
      const theme = !this.state.isEnabled ? "dark": "light"
      var updates = {}
      updates["/users/" + firebase.auth().current.user.uid + "/cureent_theme/"]=theme
      firebase.database().ref().update(updates);
      this.setState({isEnabled: !previous_state, light_theme: previous_state})

    };
