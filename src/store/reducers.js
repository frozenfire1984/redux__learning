import {combineReducers} from 'redux'
import userReducer from './user/reducers'
import subscrReducer from './subscr/reducers'

const rootReducer = combineReducers({
  user: userReducer,
  subscr: subscrReducer,
});


export default rootReducer;


