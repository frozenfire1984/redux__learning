import {SURSCR_CHANGE_EMAIL,SURSCR_CHANGE_FREQ} from "./actions";

const initialStore = {
  email: 'test@mail.ru',
  freq: '2'
};

const subscrReducer = (store = initialStore, actionCreator) => {

  switch (actionCreator.type) {
    case SURSCR_CHANGE_EMAIL:
      return{
        ...store, email: actionCreator.payload
      };
    case SURSCR_CHANGE_FREQ:
      return{
        ...store, freq: actionCreator.payload
      };
  }

  return store;

};


export default subscrReducer

