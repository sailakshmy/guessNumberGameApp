import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#ddb52f",
    borderColor: "#ddb52f",
    borderWidth: 2,
    textAlign: "center",
    padding: 18,
  },
});
export default Title;
