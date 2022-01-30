import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; //create store for storaging data
import {connect, Provider} from 'react-redux'; //connect - for plug react components to store

const initialStore = {
  firstName: 'init name',
  secondName: 'init second name',
  email: '',
};

//actions:
const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const actionChangeFirstName = {
  type: ACTION_CHANGE_FIRST_NAME, //ID of action
  payload: 'changed init name',
  //payload: null
};

const actionChangeSecondName = {
  type: ACTION_CHANGE_SECOND_NAME, //ID of action
  payload: 'changed init second name',
  //payload: null
};

const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'ACTION_CHANGE_FIRST_NAME':
      return{...store, firstName: action.payload};
    case 'ACTION_CHANGE_SECOND_NAME':
      return{...store, secondName: action.payload};
  }

  return store;

};


const store = createStore(rootReducer); //create store. We must create store only thgrought reduser!

console.log(store.getState());

store.dispatch(actionChangeFirstName);

console.log(store.getState());

store.dispatch(actionChangeSecondName);

console.log(store.getState());

class MainComponent extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      test: 'foo bar'
    }
  }*/
  render() {
    console.log(this.props);
    return (
      <div>
        {/*<div>
          <input type="text" placeholder="first name"/>
        </div>
        <div>
          <input type="text" placeholder="second name"/>
        </div>*/}
        <div>output: "{this.props.firstName}", "{this.props.secondName}" {/*{this.state.test}*/}</div>
      </div>
    )
  }
}



//console.log(store.getState());

const mapStateToProp = (store_values) => {
  //console.log(store.getState());
  return {
    firstName: store_values.firstName,
    secondName: store_values.secondName,
  }

};

const WrappedMainComponent = connect(mapStateToProp)(MainComponent); //hand over data from store to components's props

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedMainComponent/>
    </Provider>
  </React.StrictMode>
  ,document.getElementById("root")
);
