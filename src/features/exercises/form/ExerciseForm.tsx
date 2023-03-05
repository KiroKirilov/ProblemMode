import { Button, Divider, IndexPath, Input, Layout, Select, SelectItem, Text, TextProps } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { formStyles } from "../../../common/commonStyles";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { KeyboardDismissLayout } from "../../../common/KeyboardDismissLayout";
import { KeyboardBehaviour, useKeyboardBehaviour } from "../../../common/useKeyboardBehaviour";
import { ValidationErrorCaption } from "../../../common/ValidationErrorCaption";
import { SubPage } from "../../navigation/SubPage";
import { ExerciseFormIcon } from "./ExerciseFormIcon";
import { useExerciseForm } from "./useExerciseForm";

const formIconSize = 50

export const ExerciseForm: React.FC = () => {
  const title = 'New Exercise'
  useKeyboardBehaviour(KeyboardBehaviour.AdjustNothing);
  const { controls, onSubmit, bodyParts, categories } = useExerciseForm();

  return (
    <SubPage title={title} level="2" contentContainerStyle={styles.container}>
      <KeyboardDismissLayout level='2' style={styles.container}>
        <Layout level="2" style={[styles.container, formStyles.formContainer, styles.exerciseFormContainer]}>

          <ExerciseFormIcon size={formIconSize} />

          <Input
            status={controls.name.fieldState.error && "danger"}
            caption={(props) => <ValidationErrorCaption control={controls.name} textProps={props} />}
            value={controls.name.field.value}
            onBlur={controls.name.field.onBlur}
            onChangeText={controls.name.field.onChange}
            keyboardType="default"
            returnKeyType="done"
            blurOnSubmit={false}
            onSubmitEditing={onSubmit}
            style={formStyles.formControl}
            label="Name"
            accessoryRight={(props) => <FontAwesomeIcon iconStyle={props?.style} name="signature" />} />

          <Select
            status={controls.category.fieldState.error && "danger"}
            caption={(props) => <ValidationErrorCaption control={controls.category} textProps={props} />}
            selectedIndex={controls.category.field.value}
            value={categories[controls.category.field.value?.row]?.name}
            style={formStyles.formControl}
            placeholder=" "
            label="Category"
            onSelect={index => controls.category.field.onChange((index as IndexPath))}>
            {
              categories.map((c, index) => (<SelectItem key={index} title={c.name} />))
            }
          </Select>

          <Select
            status={controls.bodyPart.fieldState.error && "danger"}
            caption={(props) => <ValidationErrorCaption control={controls.bodyPart} textProps={props} />}
            selectedIndex={controls.bodyPart.field.value}
            value={bodyParts[controls.bodyPart.field.value?.row]?.name}
            style={formStyles.formControl}
            placeholder=" "
            label="Body part"
            onSelect={index => controls.bodyPart.field.onChange((index as IndexPath))}>
            {
              bodyParts.map((bp, index) => (<SelectItem key={index} title={bp.name} />))
            }
          </Select>

          <Divider />

          <Button
            size="small"
            onPress={onSubmit}
            appearance="outline"
            accessoryLeft={(props) => <FontAwesomeIcon solid iconStyle={[props?.style, formStyles.submitButtonIcon]} name="save" />}>
            {
              evaProps => <Text style={[evaProps?.style, { fontSize: 15 }]}>Save</Text>
            }
          </Button>
        </Layout>

      </KeyboardDismissLayout>
    </SubPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  exerciseFormContainer: {
    padding: 15,
    justifyContent: 'center',
    marginTop: -formIconSize
  }
})
