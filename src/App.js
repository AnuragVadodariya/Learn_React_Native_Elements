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
        <View style={{ padding: 100 }}>
          <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{ padding: 100, borderRadius: 7 }}
          >
            <Text style={{ textAlign: "center" }}>Hello All!</Text>
            <View>
              {"\n"}
              <Button
                title="close"
                onPress={toggleOverlay}
                style={{ padding: 10 }}
              />
            </View>
          </Overlay>
        </View>
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
