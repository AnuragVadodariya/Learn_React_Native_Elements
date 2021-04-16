import React from "react";
import { SearchBar } from "react-native-elements";
import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={() => console.log("user search")}
          value=""
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
