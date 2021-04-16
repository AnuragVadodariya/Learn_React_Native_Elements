import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Avatar
          activeOpacity={0.5}
          size="60"
          icon={{ name: "home", color: "black" }}
          style={{ border: 3 }}
        />
        <Avatar rounded title="AV" />
        <Avatar
          size="small"
          rounded
          onPress={() => alert("It's Work")}
          title="ABC"
        />
        <Avatar
          size="small"
          rounded
          title="XYZ"
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
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
