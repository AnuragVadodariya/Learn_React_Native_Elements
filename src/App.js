import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AirbnbRating
            count={11}
            reviews={[
              "Terrible",
              "Bad",
              "Meh",
              "OK",
              "Good",
              "Hmm...",
              "Very Good",
              "Wow",
              "Amazing",
              "Unbelievable",
              "Jesus"
            ]}
            defaultRating={11}
            size={20}
          />
        </TouchableOpacity>
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
