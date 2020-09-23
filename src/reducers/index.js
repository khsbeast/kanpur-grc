import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase"; /**updatiing firebase */
import { firestoreReducer } from "redux-firestore"; /**updating firestore */

export default combineReducers({
  cartState: productReducer,
  firebase: firebaseReducer,
  firesstore: firestoreReducer,
  auth: authReducer,
});
