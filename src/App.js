import React from "react";
import { PricingCard } from "react-native-elements";
import { View, StyleSheet, ScrollView } from "react-native";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <ScrollView>
          <PricingCard
            color="#4f9deb"
            title="Premier"
            price="$100"
            info={["12 User", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
          <PricingCard
            color="#AD7BEA"
            title="Free"
            price="$00"
            info={["10 User", "Basic Support", "Some Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
        </ScrollView>
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
