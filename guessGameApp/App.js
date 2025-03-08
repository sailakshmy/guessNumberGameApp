import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userChoice, setUserChoice] = useState();
  const [gameOver, setGameOver] = useState(true);

  const chosenNumberHandler = (chosenNumber) => {
    setUserChoice(chosenNumber);
    setGameOver(false);
  };

  let screen = <StartGameScreen setUserChoice={chosenNumberHandler} />;
  if (userChoice) {
    screen = <GameScreen userChoice={userChoice} setGameOver={setGameOver} />;
  }
  if (gameOver && userChoice) {
    screen = <GameOver />;
  }
  return (
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
