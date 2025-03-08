import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
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
