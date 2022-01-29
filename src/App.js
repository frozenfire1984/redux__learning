import {createStore} from 'redux'
import './App.css';

const initialState = {
  name: "Will",
  secondname: "Smith"
}

const reducer = (state = initialState,action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.payload}
    case 'CHANGE_SECONDNAME':
      return {...state, secondname: action.payload}
  }
  return state;
}

const store = createStore(reducer);

console.log(store.getState())

const changeName = {
  type: 'CHANGE_NAME',
  payload: 'Bill'
}

const changeSecondName = {
  type: 'CHANGE_SECONDNAME',
  payload: 'Goldberg'
}

store.dispatch(changeName);

console.log(store.getState())

store.dispatch(changeSecondName);

console.log(store.getState())

//lesson: https://www.youtube.com/watch?v=jvkhKRHS2TY&t=4s

const App = () => {
  return (
    <div className="App">
      redux
    </div>
  );
}

export default App;
