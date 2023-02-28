import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { AppNavigationContainer } from '../features/navigation/AppNavigationContainer';
import { RootState } from './store';
import { mapping } from '@eva-design/eva';
import { appTheme } from '../common/appTheme';

export const ThemedApp = () => {
  const baseTheme = useSelector((x: RootState) => x.theme.baseTheme);
  const theme = { ...baseTheme, ...appTheme };

  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigationContainer />
    </ApplicationProvider>
  );
};
