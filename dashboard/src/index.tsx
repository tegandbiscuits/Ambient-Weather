import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ACTIONS } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

store.dispatch({ type: ACTIONS.GET_WEATHER });
store.dispatch({ type: ACTIONS.GET_ALL_CONDITIONS });
store.dispatch({ type: ACTIONS.GET_ALL_SETTINGS });
