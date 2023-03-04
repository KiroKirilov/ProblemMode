import React from "react";
import { Layout, LayoutProps } from "@ui-kitten/components";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export interface KeyboardDismissLayoutProps extends LayoutProps {
  children?: React.ReactNode[] | React.ReactNode;
}

export const KeyboardDismissLayout: React.FC<KeyboardDismissLayoutProps> = (props: KeyboardDismissLayoutProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Layout {...props}>
        {props.children}
      </Layout>
    </TouchableWithoutFeedback>
  );
};