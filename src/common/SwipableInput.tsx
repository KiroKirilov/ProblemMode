import { Input, InputProps } from "@ui-kitten/components";
import React, { useRef } from "react";
import { View, ViewStyle } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export interface SwipableInputProps extends InputProps {
  containerStyle?: ViewStyle
}

export const SwipableInput: React.FC<SwipableInputProps> = (props: SwipableInputProps) => {
  const textInputRef = useRef<Input>(null);
  const { containerStyle, ...inputProps } = props;

  return (
    <View style={containerStyle}>
      <TouchableWithoutFeedback
        onPress={() => textInputRef.current?.focus()}>
        <View style={{ flex: 1 }}
          pointerEvents="none">
          <Input
            {...inputProps}
            ref={textInputRef} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};