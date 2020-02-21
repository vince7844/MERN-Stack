import React from 'react';
import './App.css';
import { ConnectedDashboard } from './components/Dashboard';
import { Provider } from 'react-redux';
import { store } from './store/index';
 
function App() {
  return (
    <Provider store={store}>
      <ConnectedDashboard />
    </Provider>
  );
}

export default App;
