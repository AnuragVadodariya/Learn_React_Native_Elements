import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Button raised title="Click Here !!" titleStyle={{ borderRadius: 7 }} />
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
    padding: 20
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
