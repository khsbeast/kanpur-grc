import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
// const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

export default store;
