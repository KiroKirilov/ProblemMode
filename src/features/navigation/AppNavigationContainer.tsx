/* eslint-disable react/no-unstable-nested-components */
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { bottomTabPageNames } from './pageNames';
import { Text, Button } from '@ui-kitten/components';
import { Layout } from '@ui-kitten/components/ui';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppNavigationContainer: FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name={bottomTabPageNames.page1}
          options={{ headerShown: false }}
          component={Page1}
        />

        <BottomTab.Screen
          name={bottomTabPageNames.page2}
          component={Page2}
        />

        <BottomTab.Screen
          name={bottomTabPageNames.page3}
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
  return (
    <Layout style={styles.container}>
      <Text>Page 1</Text>
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
    props.navigation.navigate(bottomTabPageNames.page1);
  }

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
