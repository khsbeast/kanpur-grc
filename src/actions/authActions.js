import { SIGN_IN, SIGN_IN_ERR, SIGN_UP, SIGN_UP_ERR } from "../types";
export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: SIGN_IN });
      })
      .catch((err) => {
        dispatch({ type: SIGN_IN_ERR });
      });
  };
};

export const signUp = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: SIGN_UP });
      })
      .catch((err) => {
        dispatch({ type: SIGN_UP_ERR });
      });
  };
};
