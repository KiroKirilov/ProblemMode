import { Text, useTheme } from "@ui-kitten/components";
import React, { useMemo } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { AvatarSize } from "./avatarSize";
import { sizeToValuesMap } from "./sizeToValuesMap";

export interface InitialsAvatarProps {
  title: string;
  size?: AvatarSize;
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
    <Text style={[styles.initials, sizeStyles]}>
      {initials}
    </Text>
  );
};

const styles = StyleSheet.create({
  initials: {
    borderRadius: 50,
    textAlign: "center",
  }
})
