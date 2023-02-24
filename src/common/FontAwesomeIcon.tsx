import React, { FC } from 'react';
import { ImageStyle, StyleProp, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface FontAwesomeIconProps {
  iconStyle?: StyleProp<ImageStyle>;
  name: string;
}

const style = StyleSheet.create({
  iconContainer: {
    width: '100%',
    textAlign: 'center'
  }
})

export const FontAwesomeIcon: FC<FontAwesomeIconProps> = (props: FontAwesomeIconProps) => {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(props.iconStyle);
  const mergedStyle = {...iconStyle, ...style.iconContainer}
  console.log(props);

  return (
    <Icon
      name={props.name}
      size={height as number}
      color={tintColor}
      style={mergedStyle as any}
    />
  );
};
