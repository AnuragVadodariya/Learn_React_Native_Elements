import React from "react";
import { StyleSheet, View, SafeAreaProvider } from "react-native";
import { Header } from "react-native-elements";
import { Home } from "./Comp";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        {/* <SafeAreaProvider>
          <Header
            placement="left"
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "Home", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
        </SafeAreaProvider> */}
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          leftComponent={<Home />}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          containerStyle={{
            backgroundColor: "#3D6DCC",
            justifyContent: "space-around"
          }}
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
