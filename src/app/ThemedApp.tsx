import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { AppNavigationContainer } from '../features/navigation/AppNavigationContainer';
import { RootState } from './store';
import { mapping } from '@eva-design/eva';

export const ThemedApp = () => {
  const theme = useSelector((x: RootState) => x.theme.baseTheme);

  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigationContainer />
    </ApplicationProvider>
  );
};
