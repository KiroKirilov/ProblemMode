import { Button, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { commonStyles } from "../../../common/commonStyles";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";

export interface ActiveWorkoutHeaderActionsProps {

}

export const ActiveWorkoutHeaderActions: React.FC<ActiveWorkoutHeaderActionsProps> = (props: ActiveWorkoutHeaderActionsProps) => {
  return (
    <View style={styles.container}>
      <Button appearance="ghost" status="control" accessoryRight={(props) => <FontAwesomeIcon iconStyle={props?.style} name="chevron-down" />} />

      <Button appearance="ghost" status="info">
        {evaProps => <Text style={[evaProps?.style, commonStyles.allCaps]}>Finish</Text>}
      </Button>
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
