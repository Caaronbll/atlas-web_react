import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware, compose, combineReducers } from'redux';
import { Provider } from'react-redux';
import uiReducer, { initialState } from './reducers/uiReducer';
import { Map } from 'immutable';
import thunk from'redux-thunk';
import { composeWithDevTools } from'redux-devtools-extension';
import rootReducer, { initialTotalState } from './reducers/rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers(rootReducer), initialTotalState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);