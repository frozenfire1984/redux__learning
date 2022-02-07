import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import App from './App'
import {actionChangeFirstName,actionChangeSecondName,actionChangeStatus} from '../store/actions'

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';
export const ACTION_CHANGE_STATUS = 'ACTION_CHANGE_STATUS';

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

export default connect(transferStateToProp,transferMethodsToProps)(App);
