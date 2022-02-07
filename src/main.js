import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux'; //create store for storaging data
import {Provider, connect} from 'react-redux'; //connect - for plug react components to store
import AppContainer from './components/AppContainer'
import {rootReducer} from "./store/reducers";

//lesson: https://www.youtube.com/watch?v=wzWZDh0dUYEds

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';
export const ACTION_CHANGE_STATUS = 'ACTION_CHANGE_STATUS';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </React.StrictMode>
  ,document.getElementById("root")
);
