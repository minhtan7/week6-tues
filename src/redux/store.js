import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducers/counter.reducer";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
