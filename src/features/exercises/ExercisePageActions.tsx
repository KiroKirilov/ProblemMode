import { Button } from "@ui-kitten/components";
import React from "react";
import { FontAwesomeIcon } from "../../common/FontAwesomeIcon";

export const ExercisePageActions: React.FC = () => {
  return (
    <Button
      onPress={() => console.log('pressed')}
      style={{ width: 50 }}
      appearance='ghost'
      status='control'
      accessoryLeft={(props) => <FontAwesomeIcon iconStyle={props?.style} name="plus" />} />
  );
};
