import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import App from './App'
import {actionChangeFirstName,actionChangeSecondName,actionChangeStatus} from '../store/actions'


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <App
        userFirstName={this.props.userFirstName}
        userSecondName={this.props.userSecondName}
        userStatus={this.props.userStatus}
        subscrEmail={this.props.subscrEmail}
        subscrFreq={this.props.subscrFreq}
      />
    )
  }
}


const transferStateToProp = (store) => {
  return {
    userFirstName: store.user.firstName,
    userSecondName: store.user.secondName,
    userStatus: store.user.status,
    subscrEmail: store.subscr.email,
    subscrFreq: store.subscr.freq,
  }
};

/*const transferMethodsToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(actionChangeFirstName, dispatch),
    changeSecondName: bindActionCreators(actionChangeSecondName, dispatch),
    changeStatus: bindActionCreators(actionChangeStatus, dispatch),
  }
};*/

export default connect(transferStateToProp)(App);
