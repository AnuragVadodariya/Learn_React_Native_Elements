import React from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <CheckBox title="Click Here" />

        <CheckBox center title="Click Here" />

        <CheckBox
          center
          title="Click Here"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />

        <CheckBox
          center
          title="Click Here to Remove This Item"
          iconRight
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
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
