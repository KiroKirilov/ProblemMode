import { Button, ButtonProps } from "@ui-kitten/components";
import React, { useMemo } from "react";
import { StyleSheet, Text } from "react-native";
import { FontAwesomeIcon } from "./FontAwesomeIcon";

export interface FloatingActionButtonProps extends ButtonProps {
  iconName: string;
  buttonNumber?: number;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = (props: FloatingActionButtonProps) => {
  const bottomInset = useMemo(() => ({
    bottom: props.buttonNumber ? (50 + 15) * props.buttonNumber + 15 : 15,
  }), [props.buttonNumber]);

  return (
    <Button {...props} 
      style={[baseStyles.floatingActionButton, bottomInset]}
      accessoryRight={(accessoryProps) => <FontAwesomeIcon name={props.iconName} iconStyle={accessoryProps?.style} />} />
  );
};

const baseStyles = StyleSheet.create({
  floatingActionButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 15,
    borderRadius: 50
  }
})