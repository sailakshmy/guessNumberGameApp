import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOver = ({ userChoice, roundNumber, onClickStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  let padding = 24;
  if (width < 380) {
    imageSize = 150;
    padding = 12;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.rootContainer, { padding }]}>
        <Title>Game Over </Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

export default GameOver;
// const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // padding: deviceWidth < 350 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 350 ? 150 : 300,
    // height: deviceWidth < 350 ? 150 : 300,
    // borderRadius: deviceWidth < 350 ? 75 : 150,
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
