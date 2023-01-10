import React, { useReducer } from 'react'
// import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialState = {
  count: 0,
};
const reducer = (state,action) =>{
  switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          [action.name]: state[action.name] + 1,
        };
      case 'DECREMENT':
        return {
          ...state,
          [action.name]: state[action.name] - 1,
        };
      default:
        return state;
    }
}

const App = () => {
const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div id="main">
      <span id='counter'>
      {state.count}

      </span>
      <button id= "increment-btn" onClick={dispatch({type:INCREMENT})}>+1</button>
      <button id='decrement-btn' onClick={dispatch({type:DECREMENT})}>-1</button>
    </div>
  )
}


export default App;
