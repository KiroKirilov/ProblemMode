import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { ImageProps, ImageStyle, StyleSheet } from 'react-native';
import { NavigationTabIcon } from './NavigationTabIcon';
import { BottomTabs } from './pageNames';

export interface BottomNavigationTabBarProps {
  state: TabNavigationState<any>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const styles = StyleSheet.create({
  navigation: {
    paddingVertical: 0,
    paddingTop: 7.5
  },
});

export const BottomNavigationTabBar: React.FC<BottomNavigationTabBarProps> = (props: BottomNavigationTabBarProps) => {
  const [selectedScreenName, setSelectedScreenName] = useState(props.state.routeNames[props.state.index]);

  const onSelect = (newScreen: string) => {
    setSelectedScreenName(newScreen);
    props.navigation.navigate(newScreen);
  };

  return (
    <BottomNavigation style={styles.navigation} appearance={'noIndicator'} selectedIndex={props.state.index}>
      <BottomNavigationTab
        title={BottomTabs.dashboard.title}
        icon={(style) =>
          <NavigationTabIcon
            iconStyle={style?.style}
            tabIndex={BottomTabs.dashboard.name}
            selectedIndex={selectedScreenName}
            onPress={() => onSelect(BottomTabs.dashboard.name)}
            iconName="project-diagram"
            focusedIconName="project-diagram" />} />

      <BottomNavigationTab
        title={BottomTabs.activityHistory.title}
        icon={(style) =>
          <NavigationTabIcon
            iconStyle={style?.style}
            tabIndex={BottomTabs.activityHistory.name}
            selectedIndex={selectedScreenName}
            onPress={() => onSelect(BottomTabs.activityHistory.name)}
            iconName="clock"
            focusedIconName="clock" />} />

      <BottomNavigationTab
        title={BottomTabs.workout.title}
        icon={(style) =>
          <NavigationTabIcon
            iconStyle={style?.style}
            tabIndex={BottomTabs.workout.name}
            selectedIndex={selectedScreenName}
            onPress={() => onSelect(BottomTabs.workout.name)}
            iconName="plus"
            focusedIconName="plus" />} />

      <BottomNavigationTab
        title={BottomTabs.exercises.title}
        icon={(style) =>
          <NavigationTabIcon
            iconStyle={style?.style}
            tabIndex={BottomTabs.exercises.name}
            selectedIndex={selectedScreenName}
            onPress={() => onSelect(BottomTabs.exercises.name)}
            iconName="dumbbell"
            focusedIconName="dumbbell" />} />

      <BottomNavigationTab
        title={BottomTabs.measurements.title}
        icon={(style) =>
          <NavigationTabIcon
            iconStyle={style?.style}
            tabIndex={BottomTabs.measurements.name}
            selectedIndex={selectedScreenName}
            onPress={() => onSelect(BottomTabs.measurements.name)}
            iconName="ruler"
            focusedIconName="ruler" />} />
    </BottomNavigation>
  );
};