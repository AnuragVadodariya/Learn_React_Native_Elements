import React from "react";
import { SocialIcon } from "react-native-elements";
import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        {/* icons */}
        <SocialIcon type="twitter" />
        <SocialIcon raised={false} type="gitlab" />
        <SocialIcon light type="medium" />
        <SocialIcon light raised={false} type="medium" />
        {/* Button */}
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={{ textAlign: "center" }}
        />
        <SocialIcon
          title="Some Twitter Message"
          button
          type="twitter"
          style={{ textAlign: "center" }}
        />
        <SocialIcon button type="medium" style={{ textAlign: "center" }} />
        <SocialIcon
          button
          light
          type="instagram"
          style={{ textAlign: "center" }}
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
