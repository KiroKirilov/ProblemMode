import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Layout, Divider, Text } from "@ui-kitten/components";
import React, { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { MainPage } from "../navigation/MainPage";
import { formSheetChanged, startWorkout } from "./activeWorkoutSlice";
import { ActiveWorkoutForm } from "./form/ActiveWorkoutForm";
import { WorkoutTemplatesView } from "./templates/WorkoutTemplatesView";
import { WorkoutStackPages, WorkoutStackParamList } from "./workoutPages";
import { WorkoutBottomSheetHeader } from "./WorkoutBottomSheetHeader";

export const WorkoutsHome: FC = () => {
  const { hasActiveWorkout, manualMinimizeTrigger } = useSelector((x: RootState) => x.activeWorkout)
  const dispatch = useDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    console.log(bottomSheetRef.current);
    if (bottomSheetRef?.current) {
      console.log('12hi');
      bottomSheetRef.current.collapse();
    }
  }, [manualMinimizeTrigger])
  const snapPoints = useMemo(() => ['10%', '100%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    dispatch(formSheetChanged(index));
  }, []);


  const startNewWorkout = () => {
    dispatch(startWorkout());
  }

  const renderAfterContent = () => {
    console.log(hasActiveWorkout);
    return (
      <>
        {
          hasActiveWorkout &&
          <View style={styles.bottomSheet}>
            <BottomSheet
              ref={bottomSheetRef}
              handleComponent={WorkoutBottomSheetHeader}
              index={1}
              style={{ zIndex: 10 }}
              backgroundComponent={(props) => <Layout style={[props.style, { borderTopStartRadius: 10 }]} level='3' />}
              snapPoints={snapPoints}
              animateOnMount={false}
              onChange={handleSheetChanges}
            >
              <View style={styles.contentContainer}>
                <ActiveWorkoutForm />
              </View>
            </BottomSheet>
          </View>
        }
      </>
    )
  }

  return (
    <MainPage title={WorkoutStackPages.workoutsHome.title} renderAfterContent={renderAfterContent} hideShadow={hasActiveWorkout}>
      <Layout style={[styles.container]}>
        <Button appearance="outline" onPress={startNewWorkout}>Start an empty workout</Button>
      </Layout>

      <Divider />

      <WorkoutTemplatesView />

    </MainPage>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: -20,
    zIndex: 5,
  }
})
