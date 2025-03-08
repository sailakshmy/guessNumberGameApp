import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

const GameScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 48,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.accent500,
    borderColor: Colors.accent500,
    borderWidth: 2,
    textAlign: "center",
    padding: 18,
  },
});

export default GameScreen;
