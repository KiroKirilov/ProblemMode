import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemedApp } from './ThemedApp';
import TaskContext from '../common/db/task';

const { RealmProvider } = TaskContext;

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
