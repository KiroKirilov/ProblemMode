import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Button } from '@ui-kitten/components';
import { Layout } from '@ui-kitten/components/ui';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigationTabBar } from './BottomNavigationTabBar';
import { ExercisesStack } from '../exercises/ExercisesStack';
import { useRepository } from '../../db/useRepository';
import { BottomTabs } from '../../common/pageNames';
import { ExerciseBodyPart, ExerciseBodyPartModel } from '../../db/models/exerciseBodyPart';
import { WorkoutStack } from '../workout/WorkoutStack';
import { Exercise, ExerciseModel } from '../../db/models/exercise';
import { HistoryStack } from '../history/HistoryStack';
import { DashboardStack } from '../dashboard/DashboardStack';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppNavigationContainer: FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator tabBar={(props) => <BottomNavigationTabBar {...props} />}>
        <BottomTab.Screen
          name={BottomTabs.dashboard.name}
          options={{ headerShown: false }}
          component={DashboardStack}
        />

        <BottomTab.Screen
          options={{ headerShown: false }}
          name={BottomTabs.activityHistory.name}
          component={HistoryStack}
        />

        <BottomTab.Screen
          name={BottomTabs.workout.name}
          options={{ headerShown: false }}
          component={WorkoutStack}
        />

        <BottomTab.Screen
          name={BottomTabs.exercises.name}
          options={{ headerShown: false }}
          component={ExercisesStack}
        />

        <BottomTab.Screen
          name={BottomTabs.measurements.name}
          component={Page3}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Page3 = () => {
  return (
    <Layout style={styles.container}>
      <Text>Page 3</Text>
    </Layout>
  );
};
