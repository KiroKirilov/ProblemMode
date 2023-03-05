import { TextProps } from "@ui-kitten/components";
import React from "react";
import { UseControllerReturn } from "react-hook-form";
import { Text, View, TextProps as RNTextProps } from "react-native";
import { formStyles } from "./commonStyles";

export interface ValidationErrorCaptionProps {
  textProps?: TextProps | RNTextProps;
  control: UseControllerReturn<any, any>;
}

export const ValidationErrorCaption: React.FC<ValidationErrorCaptionProps> = (props: ValidationErrorCaptionProps) => {
  return (
    <View style={formStyles.captionContainer}>
      <Text {...props.textProps}>{props.control.fieldState.error?.message}</Text>
    </View>
  );
};