import React from "react";
import { StyleSheet, Text } from "react-native";

const Instruction = ({ children, styling }) => {
  return <Text style={[styles.instruction, styling]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instruction: {
    color: "white",
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
export default Instruction;
