import React, { Component, Fragment } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import Login from './src/components/pages/Login'
import AlbumList from './src/components/pages/AlbumList'

export default class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBY1grNVdrjYQ_KvPPyV4sV94KeF5mBg7Q",
      authDomain: "authentication-81f7b.firebaseapp.com",
      databaseURL: "https://authentication-81f7b.firebaseio.com",
      projectId: "authentication-81f7b",
      storageBucket: "authentication-81f7b.appspot.com",
      messagingSenderId: "278650766003",
      appId: "1:278650766003:web:1b891e8db53196ecbc26c6",
      measurementId: "G-YGM8X5SBP2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
        console.log('true');
      }
      this.setState({ loggedIn: false })
      console.log('fasle bro');
    })
  }

  renderContent() {
    if (this.state.loggedIn) {
      console.log('logged in');
      return (

        <View><Text>Hello</Text></View>
      )

    }
    else {
      return <AlbumList />
    }

  }
  render() {
    return (
      this.renderContent()
    )
  }
}
