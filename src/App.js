import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Badge } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Badge
          style={{ marginHorizontal: 20, cursor: "pointer" }}
          value="99+"
          status="error"
        />

        <Badge
          style={{ padding: 20, margin: 20, cursor: "pointer" }}
          value={<Text>My Custom Badge</Text>}
        />

        <Badge
          style={{ marginHorizontal: 20, cursor: "pointer" }}
          status="success"
          value="12+"
          size={40}
        />
        <Badge
          style={{ marginHorizontal: 20, cursor: "pointer" }}
          status="error"
          value="2+"
          size={40}
        />
        <Badge
          style={{ marginHorizontal: 20, cursor: "pointer" }}
          status="primary"
          value="03+"
          size={40}
        />
        <Badge
          style={{ marginHorizontal: 20, cursor: "pointer" }}
          status="warning"
          value="55+"
          size={40}
        />

        <Avatar
          rounded
          source={{
            uri: "https://randomuser.me/api/portraits/men/41.jpg"
          }}
          size="large"
        />

        <Badge
          style={{ marginHorizontal: 20, cursor: "pointer" }}
          status="success"
          value="9+"
          containerStyle={{ position: "absolute", top: 20, right: 17 }}
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
    flexDirection: "row"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
