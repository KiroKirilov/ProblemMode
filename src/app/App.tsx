import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemedApp } from './ThemedApp';
import DbContext from '../db/problemModeDb';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { RealmProvider } = DbContext;

const App = () => {
  return (
    <Provider store={store}>
      <RealmProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <ThemedApp />
        </GestureHandlerRootView>
      </RealmProvider>
    </Provider>
  );
};

export default App;
