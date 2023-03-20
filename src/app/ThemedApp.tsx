import React, { useEffect } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { AppNavigationContainer } from '../features/navigation/AppNavigationContainer';
import { RootState } from './store';
import { mapping } from '@eva-design/eva';
import { appTheme } from '../common/appTheme';
import { useSeed } from '../db/seed/useSeed';
import { useInitialData } from './useInitialData';

export const ThemedApp = () => {
  const baseTheme = useSelector((x: RootState) => x.theme.baseTheme);
  const theme = { ...baseTheme, ...appTheme };
  useSeed();
  useInitialData();

  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigationContainer />
    </ApplicationProvider>
  );
};
