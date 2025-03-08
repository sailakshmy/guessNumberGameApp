import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
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
    <View style={styles.inputContainer}>
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
          <PrimaryButton onPress={onClickConfirmButton}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "",
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
