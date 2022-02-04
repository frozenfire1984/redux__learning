import {ACTION_CHANGE_FIRST_NAME,ACTION_CHANGE_SECOND_NAME,ACTION_CHANGE_STATUS} from '../main'

const initialStore = {
  firstName: 'John',
  secondName: 'Smith',
  email: '',
  status: false,
};



export const rootReducer = (store = initialStore, actionCreator) => {

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
