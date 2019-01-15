import React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
var PushNotification = require("react-native-push-notification");

export interface Props {}
export default class App extends Component<Props> {
  id: number;
  constructor(props: Props) {
    super(props);
    this.id = 0;
  }
  onPress = () => {
    PushNotification.localNotification({
      id: "" + this.id++,
      ticker: "My Notification Ticker",
      autoCancel: true,
      largeIcon: "ic_launcher",
      smallIcon: "ic_notification",
      bigText: "My big text that will be shown when notification is expanded",
      subText: "This is a subText",
      color: "red",
      vibrate: true,
      vibration: 300,
      tag: "some_tag",
      group: "group",
      ongoing: false,
      priority: "high",
      visibility: "private",
      importance: "high",
      foreground: true,
      alertAction: "dara",
      category: "false",
      userInfo: "hello",
      title: "My Notification Title",
      message: "My Notification Message",
      playSound: false,
      soundName: "default",
      number: "10",
      actions: '["Yes", "No"]'
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instruction}>
          Click on the button to have a notification
        </Text>
        <Button onPress={this.onPress} block success>
          <Text>Click Here</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  child: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  instruction: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "800"
  }
});
