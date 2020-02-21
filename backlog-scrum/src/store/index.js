import { createStore } from 'redux';
import { dashboardReducer } from '../reducers/dashboardReducer';

export const store = createStore(dashboardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());