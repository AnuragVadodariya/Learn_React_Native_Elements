import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Button } from "react-native-elements";

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Card>
          <Card.Title>Emp. Info.</Card.Title>
          {"\n"}
          <Card.Image source="https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" />
          <Text>
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            elit tellus, maximus sit amet augue ut, accumsan posuere ipsum.
            Integer in enim dolor. Nam viverra tristique mattis. In consequat
            diam mollis mi bibendum accumsan. Suspendisse libero erat, lobortis
            id vehicula eget, fermentum quis purus. Nulla quis augue ultrices,
            sodales sem vitae, lacinia sapien. Suspendisse euismod, justo vel
            suscipit vehicula, urna leo aliquam odio, sit amet commodo purus
            mauris vulputate nibh. Nunc augue mi, malesuada ac ante a, vulputate
            pulvinar dolor. Nunc ornare tortor auctor, aliquet elit in,
            pellentesque est. Etiam consequat metus quis dignissim elementum.
            Proin nec porttitor quam. Vivamus pharetra laoreet ligula vel
            ornare. Aenean non arcu tortor. Aenean sed fringilla neque. Vivamus
            luctus sapien auctor massa faucibus faucibus. Vestibulum felis enim,
            sagittis id semper in, rhoncus feugiat ligula. Vestibulum lacinia
            tempus lectus et ultricies.
            {"\n"}
            {"\n"}
          </Text>
          <Button title="Read More" />
        </Card>
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
