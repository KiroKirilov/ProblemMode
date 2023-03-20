import { Button, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AllCapsButton } from "../../../common/AllCapsButton";
import { commonStyles } from "../../../common/commonStyles";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";

export interface ActiveWorkoutHeaderActionsProps {
  onFinish: () => void;
}

export const ActiveWorkoutHeaderActions: React.FC<ActiveWorkoutHeaderActionsProps> = (props: ActiveWorkoutHeaderActionsProps) => {
  return (
    <View style={styles.container}>
      <Button appearance="ghost" status="control" accessoryRight={(props) => <FontAwesomeIcon iconStyle={props?.style} name="chevron-down" />} />

      <AllCapsButton appearance="ghost" status="info" onPress={props.onFinish}>
        Finish
      </AllCapsButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
})