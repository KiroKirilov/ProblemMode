import { useTheme } from "@ui-kitten/components";
import React from "react";
import { ImageStyle, TextStyle, View } from "react-native";
import { FontAwesomeIcon } from "../FontAwesomeIcon";
import { AvatarSize } from "./avatarSize";
import { sizeToValuesMap } from "./sizeToValuesMap";

export interface IconAvatarProps {
  iconName: string;
  size?: AvatarSize;
  backgroundColor?: string;
}

export const IconAvatar: React.FC<IconAvatarProps> = (props: IconAvatarProps) => {
  const theme = useTheme();
  const sizes = sizeToValuesMap[props.size || "small"];

  const avatarContainerStyles: TextStyle = {
    width: sizes.width,
    height: sizes.height,
    fontSize: sizes.fontSize,
    backgroundColor: props.backgroundColor || theme['text-disabled-color'],
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
  }

  const iconStyles: ImageStyle = {
    height: sizes.fontSize,
    tintColor: theme['color-primary-active'],
    marginTop: -1
  }

  return (
    <View style={avatarContainerStyles}>
      <FontAwesomeIcon iconStyle={iconStyles} light name={props.iconName} />
    </View>
  );
};
