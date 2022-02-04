import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionChangeFirstName,actionChangeSecondName,actionChangeStatus} from '../store/actions'

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
    //const {firstName,secondName,status} = this.props;


    const reset = (val) => {
      changeFirstName(val + " name");
      changeSecondName(val + " second name");
      changeStatus(false);
    };

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

export default connect(transferStateToProp, transferMethodsToProps)(MainComponent);
