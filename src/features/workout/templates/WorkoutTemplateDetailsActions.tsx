import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { Button } from "@ui-kitten/components";

export interface WorkoutTemplateDetailsActionsProps {
  onDelete: () => void;
  onEdit: () => void
}

export const WorkoutTemplateDetailsActions: FC<WorkoutTemplateDetailsActionsProps> = (props: WorkoutTemplateDetailsActionsProps) => {
  return (
    <View style={styles.actionsContainer}>
      <Button
        onPress={() => props.onEdit()}
        style={{ width: 50 }}
        appearance='ghost'
        status='control'
        accessoryLeft={props => <FontAwesomeIcon iconStyle={props?.style} name="pen" />} />

      <Button
        onPress={() => props.onDelete()}
        style={{ width: 50 }}
        appearance='ghost'
        status='danger'        
        accessoryLeft={props => <FontAwesomeIcon iconStyle={props?.style} name="trash" />} />
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
})
