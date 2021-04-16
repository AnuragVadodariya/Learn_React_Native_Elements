import React, { useState } from "react";
import { Button, Overlay } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => setVisible(!visible);
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Button title="Open Overlay Box" onPress={toggleOverlay} />

        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          style={{ padding: 40 }}
        >
          <Text>Hello All!</Text>
        </Overlay>
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
