import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; //create store for storaging data
import {connect, Provider} from 'react-redux'; //connect - for plug react components to store

//lesson: https://www.youtube.com/watch?v=wzWZDh0dUYE

const initialStore = {
  firstName: 'John',
  secondName: 'Smith',
  email: '',
  status: '',
};

//actions:
const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

//wrapper-interlayer for action for transfer him outer payload (data from inputs for write these to redux-store)
const actionChangeFirstName = (value) => {
  return {
    type: ACTION_CHANGE_FIRST_NAME, //ID of action
    payload: value,
  };
}

const actionChangeSecondName = (value) => {
  return {
    type: ACTION_CHANGE_SECOND_NAME, //ID of action
    payload: value,
  };
}





const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'ACTION_CHANGE_FIRST_NAME':
      return{...store, firstName: action.payload};
    case 'ACTION_CHANGE_SECOND_NAME':
      return{...store, secondName: action.payload};
  }

  return store;

};

/*
This is create store and also observer events for store.
Creating and changing store only through reducer!
This called each time when Store get dispatch.
Dispatch called each time when change MainComponent's props
MainComponent's props called each time when change inputs values
*/

const store = createStore(rootReducer);

//console.log(store.getState());
//store.dispatch(actionChangeFirstName);
//console.log(store.getState());
//store.dispatch(actionChangeSecondName);
//console.log(store.getState());

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'foo bar'
    };

    this.reset = this.reset.bind(this)
  }
  reset(val) {
    this.props.dispatch(actionChangeFirstName(val + " name"));
    this.props.dispatch(actionChangeSecondName(val + " second name"));
  }
  render() {
    //console.log("from class");
    //console.log(this.props);
    //console.log(this.state);

    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.firstName}
            onChange={(event) => {
              this.props.dispatch(actionChangeFirstName(event.target.value));
            }}
            placeholder="first name"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.props.secondName}
            onChange={(event) => {
              this.props.dispatch(actionChangeSecondName(event.target.value));
            }}
            placeholder="second name"
          />
        </div>
        <button onClick={() => this.reset("Default")}>reset</button>
        <hr/>
        <div>
          <pre>output: "{this.props.firstName}", "{this.props.secondName}"</pre>

          {/*<br/>
          {this.state.test}*/}
        </div>
      </div>
    )
  }
}


/*const MainComponentF = (props) => {


  const test = useState("foo bar");

  function ClickHandler(){
    //console.log(val);
    props.dispatch(actionChangeFirstName)
  }

  return (
    <div>
      {/!*<div>
          <input type="text" placeholder="first name"/>
        </div>
        <div>
          <input type="text" placeholder="second name"/>
        </div>*!/}
      <button onClick={ClickHandler}>change</button>
      <div>output: "{props.firstName}", "{props.secondName}"
        <br/>
        {test}
      </div>
    </div>
  )
};*/

const transferStateToProp = (store_values) => {
  return {
    firstName: store_values.firstName,
    secondName: store_values.secondName,
  }
};

const WrappedMainComponent = connect(transferStateToProp)(MainComponent); //hand over data and methods(etc dispatch) from redux-store to components's props

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedMainComponent/>
    </Provider>
  </React.StrictMode>
  ,document.getElementById("root")
);
