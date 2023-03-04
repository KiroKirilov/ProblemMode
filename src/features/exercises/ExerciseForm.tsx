import { Input, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesomeIcon } from "../../common/FontAwesomeIcon";
import { KeyboardDismissLayout } from "../../common/KeyboardDismissLayout";
import { KeyboardBehaviour, useKeyboardBehaviour } from "../../common/useKeyboardBehaviour";
import { SubPage } from "../navigation/SubPage";
import Icon from 'react-native-vector-icons/FontAwesome5';


export const ExerciseForm: React.FC = () => {
  const title = 'New Exercise'
  useKeyboardBehaviour(KeyboardBehaviour.AdjustNothing);
  console.log('ligma');

  const renderIcon = (props: any) => {

    const { height, tintColor } = StyleSheet.flatten(props.style);

    return (
      <TouchableWithoutFeedback>
        <Icon {...props}
          size={height as number}
          color={tintColor} name={'eye'} />
      </TouchableWithoutFeedback>
    )
  };

  return (
    <SubPage title={title}>
      <KeyboardDismissLayout style={{ flex: 0.75 }}>

        <Input
          label='Password'
          placeholder='Place your Text'
          accessoryRight={renderIcon}
        />

        <Input
          keyboardType="default"
          returnKeyType="next"
          blurOnSubmit={false}
          label="Name"
          accessoryRight={(props) => <FontAwesomeIcon iconStyle={props?.style} name="arrow-right" />} />

      </KeyboardDismissLayout>
    </SubPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const formStyles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  formControl: {
    width: "70%",
    marginVertical: 5
  },
  submitButton: {
    width: "30%",
  }
})