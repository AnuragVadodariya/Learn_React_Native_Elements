import React from "react";
import { Tile } from "react-native-elements";
import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Tile
          // imageSrc={require("")}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Caption Text"
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
