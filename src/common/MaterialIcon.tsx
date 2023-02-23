import React, { FC } from 'react';
import { ImageStyle, StyleProp, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface MaterialIconProps {
  iconStyle?: StyleProp<ImageStyle>;
  name: string;
}

export const MaterialIcon: FC<MaterialIconProps> = (props: MaterialIconProps) => {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(props.iconStyle);

  return (
    <Icon
      name={props.name}
      size={height as number}
      color={tintColor}
      style={iconStyle as any}
    />
  );
};
