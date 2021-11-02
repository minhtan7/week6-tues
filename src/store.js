import { createStore } from "redux";

const initialState = {
  count: 5, //if this is 5 which means
};

const counterReducer = (state = initialState, action) => {
  console.log(action); //{ type: "increase", payload: 5 }
  // state = {count:5}
  if (action.type === "increase") {
    return { count: state.count + 1 }; // state = {count:6}
  }
  if (action.type === "decrease") {
    return { count: state.count - 1 };
  }
  return state;
};
// state = {count:5}

const store = createStore(counterReducer);

export default store;
