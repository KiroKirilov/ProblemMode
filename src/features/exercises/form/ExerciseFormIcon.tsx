import { useTheme } from "@ui-kitten/components";
import React, { FC } from "react";
import { ImageStyle, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";

export interface ExerciseFormIconProps {
  size: number;
}

export const ExerciseFormIcon: FC<ExerciseFormIconProps> = (props: ExerciseFormIconProps) => {
  const theme = useTheme();
  const tintColor = theme["color-primary-default"];
  const style: ImageStyle = {
    tintColor,
    height: props.size
  };

  return (
    <>
      <FontAwesomeIcon iconStyle={style} name="dumbbell" />
    </>
  );
};

const styles = StyleSheet.create({
  dumbbellIcon: {
    height: 50,
  },
  plusIcon: {
    height: 20,
  }
})