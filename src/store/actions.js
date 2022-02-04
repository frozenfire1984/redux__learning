import {ACTION_CHANGE_FIRST_NAME,ACTION_CHANGE_SECOND_NAME,ACTION_CHANGE_STATUS} from '../main'

export const actionChangeFirstName = (value) => {    //<=ActionCreator
  return {
    type: ACTION_CHANGE_FIRST_NAME, //ID of action
    payload: value,
  };
};

export const actionChangeSecondName = (value) => {    //<=ActionCreator
  return {
    type: ACTION_CHANGE_SECOND_NAME, //ID of action
    payload: value,
  };
};

export const actionChangeStatus = (value) => {    //<=ActionCreator
  return {
    type: ACTION_CHANGE_STATUS, //ID of action
    payload: value,
  };
};
