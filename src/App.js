import React from "react";
import { Tile } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Tile
          // imageSrc={require("")}
          title="Lorem ipsum dolor sit amet, consectetur"
          icon={{ name: "play-circle", type: "font-awesome" }} // optional
          contentContainerStyle={{ height: 70 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text>Caption</Text>
            <Text>Caption</Text>
          </View>
        </Tile>
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
