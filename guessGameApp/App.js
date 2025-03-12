import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userChoice, setUserChoice] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const chosenNumberHandler = (chosenNumber) => {
    setUserChoice(chosenNumber);
    setGameOver(false);
  };

  const onGameOverEvent = (numberOfRounds) => {
    setGameOver(true);
    setRoundNumber(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserChoice(null);
    setRoundNumber(0);
  };
  let screen = <StartGameScreen setUserChoice={chosenNumberHandler} />;
  if (userChoice) {
    screen = (
      <GameScreen userChoice={userChoice} onGameOverEvent={onGameOverEvent} />
    );
  }
  if (gameOver && userChoice) {
    screen = (
      <GameOver
        userChoice={userChoice}
        roundNumber={roundNumber}
        onClickStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
