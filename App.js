import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import Login from './src/components/pages/Login'
import Button from './src/components/layouts/Button'

export default class App extends Component {
  componentDidMount() {
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
  }
  render() {
    return (
      <Button />
    )
  }
}
