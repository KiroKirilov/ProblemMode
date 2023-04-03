import { FC } from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { isNullish } from "../../common/isNullish";

const shadowImage = require("../../assets/images/shadow.png");

export interface ShadowImageProps {
  bottom?: number;
  opacity?: number
  height?: number;
}

const defaultProps: ShadowImageProps = {
  bottom: -14,
  opacity: 0.4,
  height: 50,
}

export const ShadowImage: FC<ShadowImageProps> = (props: ShadowImageProps) => {
  const propStyles: ImageStyle = {
    height: isNullish(props.height) ? defaultProps.height : props.height,
    opacity: isNullish(props.opacity) ? defaultProps.opacity : props.opacity,
    bottom: isNullish(props.bottom) ? defaultProps.bottom : props.bottom
  }

  return (
    <Image style={[styles.shadowImage, propStyles]} source={shadowImage} />
  );
};

const styles = StyleSheet.create({

  shadowImage: {
    position: 'absolute',
    zIndex: 10,
    resizeMode: 'stretch',
    width: '100%',
  }
})