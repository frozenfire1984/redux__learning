import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppContainer from './components/AppContainer'
//import App from './components/App'
import rootReducer from "./store/reducers.js";

//lesson: https://www.youtube.com/watch?v=wzWZDh0dUYEds



const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App/>*/}
      <AppContainer/>
    </Provider>
  </React.StrictMode>
  ,document.getElementById("root")
);
