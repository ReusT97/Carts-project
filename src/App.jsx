import { useReducer, useState } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case "minus":
      return { ...state, count: state.count - 1 };
    case "plus":
      return { ...state, count: state.count + 1 };
    case "updateKey":
      return { ...state, key: action.payload };
  }
};

function App() {
  const [state, dispatch] = useReducer(firstReducer, {
    key: "",
    count: 0,
    key: "",
  });
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) =>
          dispatch({
            type: "updateKey",
            payload: e.target.value,
          })
        }
      />
      <h1>your key is - {state.key} </h1>
      <button onClick={() => dispatch({ type: "minus" })}>- </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
    </div>
  );
}

export default App;
