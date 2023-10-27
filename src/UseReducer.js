import React, {useReducer} from "react";

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "increment") {
        return {count: state.count + 1}
    }
    else if (action.type === "decrement") {
        return {count: state.count - 1}
    }
    else {
        throw new Error("Unsupported action")
    }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const handleClickInc = () => {
    dispatch({type: "increment"});
  };
  const handleClickDec = () => {
    dispatch({type: "decrement"});
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  )
}

export default UseReducer


