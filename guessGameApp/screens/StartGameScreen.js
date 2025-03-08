import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const StartGameScreen = ({ setUserChoice }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const onInputChange = (input) => {
    setEnteredNumber(input);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const onClickConfirmButton = () => {
    const keyedInNumber = parseInt(enteredNumber);
    if (isNaN(keyedInNumber) || keyedInNumber <= 0 || keyedInNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Input has to be a number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      );
    }
    setUserChoice(keyedInNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction>Enter a number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onInputChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onClickConfirmButton}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 75,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
