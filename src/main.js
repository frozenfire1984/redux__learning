import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux'; //create store for storaging data
import {connect, Provider} from 'react-redux'; //connect - for plug react components to store

//lesson: https://www.youtube.com/watch?v=wzWZDh0dUYEds

const initialStore = {
  firstName: 'John',
  secondName: 'Smith',
  email: '',
  status: false,
};

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';
const ACTION_CHANGE_STATUS = 'ACTION_CHANGE_STATUS';

//Actions Creators:
//wrapper-interlayer for action for transfer him outer payload (data from inputs for write these to redux-store)
//these dont need in we only read data from store
const actionChangeFirstName = (value) => {    //<=ActionCreator
  return {
    type: ACTION_CHANGE_FIRST_NAME, //ID of action
    payload: value,
  };
};

const actionChangeSecondName = (value) => {    //<=ActionCreator
  return {
    type: ACTION_CHANGE_SECOND_NAME, //ID of action
    payload: value,
  };
};

const actionChangeStatus = (value) => {    //<=ActionCreator
  return {
    type: ACTION_CHANGE_STATUS, //ID of action
    payload: value,
  };
};

const rootReducer = (store = initialStore, actionCreator) => {

  //this switch dont need in we only read data from store
  switch (actionCreator.type) {
    case 'ACTION_CHANGE_FIRST_NAME':
      return{...store, firstName: actionCreator.payload};
    case 'ACTION_CHANGE_SECOND_NAME':
      return{...store, secondName: actionCreator.payload};
    case 'ACTION_CHANGE_STATUS':
      return{...store, status: actionCreator.payload};
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


const ChildComponent = (props) => {
  const [{visible}, setVisible] = useState({visible: false});  //hack for enable states's identify ability in React Dev Tools; but some reason this don/t work with methods (
  const [status, setStatus] = useState(false);

  return (
    <div>
      {visible.toString()}
      <br/>
      status:
      {status
        ? <>login</>
        : <>logout</>
      }
      <hr/>
      {props.test}
      <hr/>

      <button onClick={() => setStatus(!status)}>change status</button>

    </div>
  )
};

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      test: 'foo bar',
    };

    //this.reset = this.reset.bind(this)
  }
  /*reset(val) {
    this.props.changeFirstName(val + " name");
    this.props.changeSecondName(val + " second name");
  }*/
  render() {
    console.log(this.props);

    const {firstName,secondName,status,changeFirstName,changeSecondName,changeStatus} = this.props;
    //const {firstName,secondName,status} = this.props;  //if transferMethodsToProps don't connect, and dispatch method working directionally


    const reset = (val) => {
      changeFirstName(val + " name");
      changeSecondName(val + " second name");
      changeStatus(false);
    };


    //if transferMethodsToProps don't connect, and dispatch method working directionally
    /*const reset = (val) => {
      this.props.dispatch(actionChangeFirstName(val + " name"));
      this.props.dispatch(actionChangeSecondName(val + " second name"));
      this.props.dispatch(actionChangeStatus(false));
    };*/

    return (
      <div>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(event) => {
              changeFirstName(event.target.value);
              //this.props.dispatch(actionChangeFirstName(event.target.value)) //if transferMethodsToProps don't connect, and dispatch method working directionally
            }}
            placeholder="first name"
          />
        </div>
        <div>
          <input
            type="text"
            value={secondName}
            onChange={(event) => {
              changeSecondName(event.target.value);
              //this.props.dispatch(actionChangeSecondName(event.target.value))  //if transferMethodsToProps don't connect, and dispatch method working directionally
            }}
            placeholder="second name"
          />
        </div>
        <div>
          <label htmlFor="input_status">
            Active:
            <input
              type="checkbox"
              checked={status}
              id="input_status"
              onChange={(event) => {
                changeStatus(!status);
                //this.props.dispatch(actionChangeStatus(!status))   //if transferMethodsToProps don't connect, and dispatch method working directionally
              }}
            />
          </label>
        </div>
        <button onClick={() => reset("Default")}>reset</button>
        <hr/>
        <div>
          <pre>output: {`${firstName} ${secondName}, Status: ${status.toString()} `}</pre>
          {/*<ChildComponent test="foo bar"/>*/}
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
    status: store_values.status,
  }
};

const transferMethodsToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(actionChangeFirstName, dispatch),
    changeSecondName: bindActionCreators(actionChangeSecondName, dispatch),
    changeStatus: bindActionCreators(actionChangeStatus, dispatch),
  }
};

//if transferMethodsToProps don't connect, and dispatch method working directionally
//const WrappedMainComponent = connect(transferStateToProp)(MainComponent); //hand over data and methods(include and dispatch) from redux-store to components's props


const WrappedMainComponent = connect(transferStateToProp, transferMethodsToProps)(MainComponent);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedMainComponent/>
    </Provider>
  </React.StrictMode>
  ,document.getElementById("root")
);
