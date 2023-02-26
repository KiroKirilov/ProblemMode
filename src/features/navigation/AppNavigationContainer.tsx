import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useDeferredValue } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabs } from './pageNames';
import { Text, Button } from '@ui-kitten/components';
import { Layout } from '@ui-kitten/components/ui';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigationTabBar } from './BottomNavigationTabBar';
import TaskContext, { Task, Todo } from '../../common/db/task';

const { useRealm, useQuery, useObject } = TaskContext;
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppNavigationContainer: FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator tabBar={(props) => <BottomNavigationTabBar {...props} />}>
        <BottomTab.Screen
          name={BottomTabs.dashboard.name}
          options={{ headerShown: false }}
          component={Page1}
        />

        <BottomTab.Screen
          name={BottomTabs.activityHistory.name}
          component={Page2}
        />

        <BottomTab.Screen
          name={BottomTabs.workout.name}
          component={Page3}
        />

        <BottomTab.Screen
          name={BottomTabs.exercises.name}
          component={Page3}
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

const Page1 = () => {
  const realm = useRealm();
  console.log("realm location:", realm.path);

  const create = () => {
    realm.write(() => {
      realm.create('Task', Task.generate('task'))
      realm.create('Todo', Todo.generate('todo'))
    })
  }

  return (
    <Layout level='2' style={styles.container}>
      <Button onPress={create}>Create!!!</Button>
    </Layout>
  );
};

const Page2 = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>
  );
};

const Page3 = () => {
  return (
    <Layout style={styles.container}>
      <Text>Page 3</Text>
    </Layout>
  );
};

const Home = (props: any) => {
  const nav = () => {
    props.navigation.navigate('Home2');
  };

  const nav2 = () => {
    props.navigation.navigate(BottomTabs.dashboard.name);
  };

  return (
    <Layout style={styles.container}>
      <Text>Home</Text>
      <Button onPress={nav}>
        Go to 2
      </Button>

      <Button onPress={nav2}>
        Go to Page 1
      </Button>
    </Layout>
  );
};

const Home2 = (props: any) => {
  const nav = () => {
    props.navigation.navigate('Home');
  };

  return (
    <Layout style={styles.container}>
      <Text>Home2</Text>
      <Button onPress={nav}>
        Go to 1
      </Button>
    </Layout>
  );
};
