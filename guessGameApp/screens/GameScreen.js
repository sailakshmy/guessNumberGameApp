import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import GuessListItem from "../components/game/GuessListItem";
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

const GameScreen = ({ userChoice, onGameOverEvent }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
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
    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newGuess);
    setGuessRounds((prevGuessRound) => [newGuess, ...prevGuessRound]);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOverEvent(guessRounds.length);
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundsLength = guessRounds?.length;
  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction styling={styles.customisedInstructionText}>
          Higher Or Lower
        </Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={generateNextGuess.bind(this, "higher")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={generateNextGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds?.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessListItem
              guess={itemData?.item}
              roundNumber={guessRoundsLength - itemData?.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 48,
    alignItems: "center",
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
  buttonContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  customisedInstructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
