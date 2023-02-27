import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemedApp } from './ThemedApp';
import DbContext from '../db/problemModeDb';

const { RealmProvider } = DbContext;

const App = () => {
  return (
    <Provider store={store}>
      <RealmProvider>
        <ThemedApp />
      </RealmProvider>
    </Provider>
  );
};

export default App;
