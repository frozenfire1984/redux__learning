export const USER_CHANGE_FIRST_NAME = 'USER_CHANGE_FIRST_NAME';
export const USER_CHANGE_SECOND_NAME = 'USER_CHANGE_SECOND_NAME';
export const USER_CHANGE_STATUS = 'USER_CHANGE_STATUS';


export const actionChangeFirstName = (value) => {    //<=ActionCreator
  return {
    type: USER_CHANGE_FIRST_NAME, //ID of action
    payload: value,
  };
};

export const actionChangeSecondName = (value) => {    //<=ActionCreator
  return {
    type: USER_CHANGE_SECOND_NAME, //ID of action
    payload: value,
  };
};

export const actionChangeStatus = (value) => {    //<=ActionCreator
  return {
    type: USER_CHANGE_STATUS, //ID of action
    payload: value,
  };
};
