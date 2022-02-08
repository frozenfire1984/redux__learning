import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import User from './index'
import {actionChangeFirstName,actionChangeSecondName,actionChangeStatus} from '../../store/actions'

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log("this.props");
    //console.log(this.props);
    return (
      <User
        firstName={this.props.firstName}
        secondName={this.props.secondName}
        status={this.props.status}
        //dispatch={this.props.dispatch}
        changeFirstName={this.props.changeFirstName}
        changeSecondName={this.props.changeSecondName}
        changeStatus={this.props.changeStatus}
      />
    )
  }
}

const transferStateToProp = (store) => {
  return {
    firstName: store.user.firstName,
    secondName: store.user.secondName,
    status: store.user.status,
  }
};

const transferDispatchToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(actionChangeFirstName, dispatch),
    changeSecondName: bindActionCreators(actionChangeSecondName, dispatch),
    changeStatus: bindActionCreators(actionChangeStatus, dispatch),
  }
};

export default connect(transferStateToProp,transferDispatchToProps)(UserContainer);

