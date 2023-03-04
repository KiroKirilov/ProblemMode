import { FC } from "react";
import { Image, StyleSheet } from "react-native";

const shadowImage = require("../../assets/images/shadow.png");

export const ShadowImage: FC = () => {
  return (
    <Image style={styles.shadowImage} source={shadowImage} />
  );
};

const styles = StyleSheet.create({

  shadowImage: {
    position: 'absolute',
    bottom: -14,
    opacity: 0.4,
    resizeMode: 'stretch',
    width: '100%',
    height: 50,
  }
})