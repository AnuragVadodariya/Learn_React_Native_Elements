import React from "react";
import { Tooltip } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Tooltip
          popover={
            <View>
              <Text>Info here</Text>
            </View>
          }
        >
          <Text>Press me</Text>
        </Tooltip>
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
