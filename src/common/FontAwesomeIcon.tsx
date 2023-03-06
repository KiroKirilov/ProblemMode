import { useTheme } from '@ui-kitten/components';
import React, { FC } from 'react';
import { ImageStyle, StyleProp, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface FontAwesomeIconProps {
  iconStyle?: StyleProp<ImageStyle>;
  name: string;
  width?: string | number;
  light?: boolean;
  solid?: boolean;
  brand?: boolean;
}

const style = StyleSheet.create({
  iconContainer: {
    textAlign: 'center',
  }
})

export const FontAwesomeIcon: FC<FontAwesomeIconProps> = (props: FontAwesomeIconProps) => {
  const theme = useTheme();
  const defaultStyle: ImageStyle = {
    tintColor: theme["text-basic-color"],
    height: theme["fontSize"]
  };
  
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(props.iconStyle || defaultStyle);
  const mergedStyle = { ...iconStyle, ...style.iconContainer }

  if (props.width) {
    mergedStyle.width = props.width
  }

  return (
    <Icon
      name={props.name}
      size={height as number}
      color={tintColor}
      style={mergedStyle as any}
      brand={props.brand}
      light={props.light}
      solid={props.solid}
    />
  );
};

const defaultIconStyle = StyleSheet.create({

})