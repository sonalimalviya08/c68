import React, { Component } from "react";
import BottomTabNavigator from './components/BottomTabNavigator';
import SafeAreaView from 'react-native-safe-area-view';
export default class App extends Component {
  render() {
    return <BottomTabNavigator />;
  }
}