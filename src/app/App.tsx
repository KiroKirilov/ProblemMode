import React from 'react';
import { dark, light, mapping } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Layout } from '@ui-kitten/components/ui';
import { StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from './store';
import { Button } from '@rneui/base';
import { changeBaseTheme, ThemeState } from '../features/theme/themeSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const theme = useSelector((x: RootState) => x.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme: ThemeState = {
      baseTheme: theme.baseThemeName === 'dark' ? light : dark,
      baseThemeName: theme.baseThemeName === 'dark' ? 'light' : 'dark',
    };

    dispatch(changeBaseTheme(newTheme));
  };

  return (
    <ApplicationProvider mapping={mapping} theme={theme.baseTheme}>
      <Layout style={styles.container}>
        <Button onPress={toggleTheme} />
      </Layout>
    </ApplicationProvider>
  );
};

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxApp;
