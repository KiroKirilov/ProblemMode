import React from "react";
import { ShadowImage } from "../navigation/ShadowImage";
import { ViewStyle, StyleProp } from "react-native";
import { BottomSheetHandleProps } from "@gorhom/bottom-sheet";

interface HandleProps extends BottomSheetHandleProps {
  style?: StyleProp<ViewStyle>;
}

export const WorkoutBottomSheetHeader: React.FC<HandleProps> = ({ style, animatedIndex }) => {
  return (
    <>
      <ShadowImage height={25} opacity={0.25} bottom={0} />
    </>
  );
};