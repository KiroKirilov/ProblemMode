import { Text } from "@ui-kitten/components";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { commonStyles } from "./commonStyles";

export interface SectionHeaderProps {
  title?: string | number;
  subTitle?: string | number
}

export const SectionHeader: React.FC<SectionHeaderProps> = memo((props: SectionHeaderProps) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text appearance="hint" style={[styles.title, commonStyles.allCaps]}>{props.title}</Text>

      {
        props.subTitle &&
        <Text appearance="hint" style={[styles.subtitle]}>{props.subTitle}</Text>
      }

    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    paddingLeft: 15,
    fontSize: 12
  },
  subtitle: {
    paddingRight: 15,
    fontSize: 12
  }
})