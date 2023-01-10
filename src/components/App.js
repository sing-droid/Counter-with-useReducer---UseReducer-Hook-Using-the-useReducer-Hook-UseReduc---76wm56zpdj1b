import React, { useReducer } from 'react'
// import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error();
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
