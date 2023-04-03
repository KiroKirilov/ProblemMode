import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SectionHeader } from "../../../common/SectionHeader";
import { Button, Text } from "@ui-kitten/components";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { WorkoutStackParamList, WorkoutStackPages } from "../workoutPages";
import { WorkoutTemplatesList } from "./WorkoutTemplatesList";

export const WorkoutTemplatesView: FC = () => {
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();

  const goToTemplateForm = () => {
    navigation.navigate(WorkoutStackPages.templateForm.name);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SectionHeader title="TEMPLATES" />
        <Button
          appearance="ghost"
          size="small"
          onPress={goToTemplateForm}
          accessoryLeft={(props) => <FontAwesomeIcon iconStyle={props?.style} name="plus" />} />
      </View>

      <View style={{flex: 1}}>
        <WorkoutTemplatesList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 15
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
