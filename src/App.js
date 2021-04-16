import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Button title="Read More" style={{ marginBottom: 20 }} />
        <Button title="More" style={{ marginBottom: 20 }} type="outline" />
        <Button title="Read More" style={{ marginBottom: 20 }} />
        <Button title=" More" style={{ marginBottom: 20 }} type="clear" />
        <Button title="Read More" style={{ marginBottom: 20 }} />
        <Button title="Read More" style={{ marginBottom: 20 }} type="outline" />
        <Button title=" More" style={{ marginBottom: 20 }} type="outline" />
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
