import {USER_CHANGE_FIRST_NAME,USER_CHANGE_SECOND_NAME,USER_CHANGE_STATUS} from './actions'

const initialStore = {
  firstName: 'John',
  secondName: 'Smith',
  //email: '',
  status: false,
};

const userReducer = (store = initialStore, actionCreator) => {
  switch (actionCreator.type) {
    case USER_CHANGE_FIRST_NAME:
      return{
        ...store, firstName: actionCreator.payload
      };
    case USER_CHANGE_SECOND_NAME:
      return{
        ...store, secondName: actionCreator.payload
      };
    case USER_CHANGE_STATUS:
      return{
        ...store, status: actionCreator.payload
      };
  }

  //console.log("store");
  //console.log(store);
  return store;

};


export default userReducer

