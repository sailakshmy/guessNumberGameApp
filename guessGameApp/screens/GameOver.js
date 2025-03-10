import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOver = ({ userChoice, roundNumber, onClickStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over </Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundNumber}</Text>{" "}
        attempts to guess the number{" "}
        <Text style={styles.highlight}>{userChoice}</Text>
      </Text>
      <PrimaryButton onPress={onClickStartNewGame}>
        Start New Game!
      </PrimaryButton>
    </View>
  );
};

export default GameOver;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: deviceWidth < 350 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 350 ? 150 : 300,
    height: deviceWidth < 350 ? 150 : 300,
    borderRadius: deviceWidth < 350 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
