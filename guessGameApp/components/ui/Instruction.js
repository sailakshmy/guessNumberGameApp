import React from "react";
import { StyleSheet, Text } from "react-native";

const Instruction = ({ children }) => {
  return <Text style={styles.instruction}>{children}</Text>;
};

const styles = StyleSheet.create({
  instruction: {
    color: "white",
    fontSize: 24,
  },
});
export default Instruction;
