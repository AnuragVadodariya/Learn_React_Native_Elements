import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Icon name="rowing" />

        <Icon name="g-translate" color="#00aced" />

        <Icon name="sc-telegram" type="evilicon" color="#517fa4" />

        <Icon
          reverse
          name="ios-american-football"
          type="ionicon"
          color="#517fa4"
        />

        <Icon
          raised
          name="rightcircle"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log("hello")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  header: {
    padding: 20,
    flexDirection: "column"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
