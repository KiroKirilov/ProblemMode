import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemedApp } from './ThemedApp';

const App = () => {
  return (
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  );
};

export default App;
