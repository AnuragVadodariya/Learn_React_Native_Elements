import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Input style={{ marginBottom: 20 }} placeholder="BASIC INPUT" />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "chevron-left" }}
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="Comment"
          leftIcon={{ type: "font-awesome", name: "comment" }}
          style={styles}
          onChangeText={(value) => this.setState({ comment: value })}
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="INPUT WITH ERROR MESSAGE"
          errorStyle={{ color: "red" }}
          errorMessage="ENTER A VALID ERROR HERE"
        />
        <Input
          style={{ marginBottom: 20 }}
          placeholder="Password"
          secureTextEntry={true}
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
