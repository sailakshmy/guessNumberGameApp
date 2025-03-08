import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import PrimaryButton from "../components/ui/PrimaryButton";
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
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userChoice, setGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const generateNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong....", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newGuess);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      setGameOver(true);
    }
  }, [currentGuess]);
  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction>Higher Or Lower</Instruction>
        <View>
          <PrimaryButton onPress={generateNextGuess.bind(this, "higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={generateNextGuess.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </Card>
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
