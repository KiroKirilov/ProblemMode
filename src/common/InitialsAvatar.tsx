import { Avatar, Text, useTheme } from "@ui-kitten/components";
import { EvaSize } from "@ui-kitten/components/devsupport";
import React, { useMemo } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export interface InitialsAvatarProps {
  title: string;
  size?: "tiny" | "small" | "medium" | "large" | "giant";
  backgroundColor?: string;
}

export const InitialsAvatar: React.FC<InitialsAvatarProps> = (props: InitialsAvatarProps) => {
  const initials = useMemo(() => props.title[0].toUpperCase(), [props.title])
  const theme = useTheme();

  const defaultBackgroundColor = theme['text-hint-color'];
  const sizes = sizeToValuesMap[props.size || "small"];

  const sizeStyles: TextStyle = {
    width: sizes.width,
    height: sizes.height,
    fontSize: sizes.fontSize,
    backgroundColor: props.backgroundColor || defaultBackgroundColor
  }

  return (
    <>
      <Text style={[styles.initials, sizeStyles]}>
        {initials}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  initials: {
    backgroundColor: "red",
    borderRadius: 50,
    textAlign: "center",
  }
})


const sizeToValuesMap = {
  tiny: {
    width: 25,
    height: 25,
    fontSize: 18
  },

  small: {
    width: 30,
    height: 30,
    fontSize: 21,
  },

  medium: {
    width: 40,
    height: 40,
    fontSize: 29,

  },

  large: {
    width: 50,
    height: 50,
    fontSize: 36,
  },

  giant: {
    width: 55,
    height: 55,
    fontSize: 39,
  }
}
