import { Button, ButtonProps, Text } from "@ui-kitten/components";
import React from "react";
import { commonStyles } from "./commonStyles";

export interface AllCapsButtonProps extends ButtonProps {
  children: any;
}

export const AllCapsButton: React.FC<AllCapsButtonProps> = (props: AllCapsButtonProps) => {
  return (
    <Button {...props}>
      {evaProps => <Text style={[evaProps?.style, commonStyles.allCaps]}>{props.children}</Text>}
    </Button>);
};