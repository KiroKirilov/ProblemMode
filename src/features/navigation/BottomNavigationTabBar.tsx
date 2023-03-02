import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { NavigationTabIcon } from './NavigationTabIcon';
import { BottomTabs } from '../../common/pageNames';

export interface BottomNavigationTabBarProps {
  state: TabNavigationState<any>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const styles = StyleSheet.create({
  navigation: {
    paddingVertical: 0,
    paddingTop: 9,
    height: 60
  },
});

export const BottomNavigationTabBar: React.FC<BottomNavigationTabBarProps> = (props: BottomNavigationTabBarProps) => {
  const [selectedScreenName, setSelectedScreenName] = useState(props.state.routeNames[props.state.index]);

  const changeScreen = (newScreen: string) => {
    setSelectedScreenName(newScreen);
    props.navigation.navigate(newScreen);
  };

  const onSelectByIndex = (screenIndex: number) => {
    const screenName = props.navigation.getState().routeNames[screenIndex];
    changeScreen(screenName);
  }

  return (
    <BottomNavigation style={styles.navigation} selectedIndex={props.state.index} onSelect={onSelectByIndex}>
      <BottomNavigationTab
        title={BottomTabs.dashboard.title}
        icon={(props) =>
          <NavigationTabIcon
            iconStyle={props?.style}
            tabIndex={BottomTabs.dashboard.name}
            selectedIndex={selectedScreenName}
            onPress={() => changeScreen(BottomTabs.dashboard.name)}
            iconName="project-diagram"
            focusedIconName="project-diagram" />} />

      <BottomNavigationTab
        title={BottomTabs.activityHistory.title}
        icon={(props) =>
          <NavigationTabIcon
            iconStyle={props?.style}
            tabIndex={BottomTabs.activityHistory.name}
            selectedIndex={selectedScreenName}
            onPress={() => changeScreen(BottomTabs.activityHistory.name)}
            iconName="clock"
            focusedIconName="clock" />} />

      <BottomNavigationTab
        title={BottomTabs.workout.title}
        icon={(props) =>
          <NavigationTabIcon
            iconStyle={props?.style}
            tabIndex={BottomTabs.workout.name}
            selectedIndex={selectedScreenName}
            onPress={() => changeScreen(BottomTabs.workout.name)}
            iconName="plus"
            focusedIconName="plus" />} />

      <BottomNavigationTab
        title={BottomTabs.exercises.title}
        icon={(props) =>
          <NavigationTabIcon
            iconStyle={props?.style}
            tabIndex={BottomTabs.exercises.name}
            selectedIndex={selectedScreenName}
            onPress={() => changeScreen(BottomTabs.exercises.name)}
            iconName="dumbbell"
            focusedIconName="dumbbell" />} />

      <BottomNavigationTab
        title={BottomTabs.measurements.title}
        icon={(props) =>
          <NavigationTabIcon
            iconStyle={props?.style}
            tabIndex={BottomTabs.measurements.name}
            selectedIndex={selectedScreenName}
            onPress={() => changeScreen(BottomTabs.measurements.name)}
            iconName="ruler"
            focusedIconName="ruler" />} />
    </BottomNavigation>
  );
};