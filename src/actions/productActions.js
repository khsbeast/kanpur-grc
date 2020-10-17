import { ADD_TO_CART, GET_NUMBERS_BASKET } from "../types";
export const addToCart = (prod) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid
    const state = getState().firestore;
    console.log(state)
    firestore
      .collection("Users")
      .doc(authorId)
      .set({
        ...prod,
      },
      {merge:true}
      )
      .then(() => {
        dispatch({
          type: ADD_TO_CART,
          payload: prod,
        });
      })
      .catch((err) => {
        dispatch({
         
        });
      });
  };
};


export const getCartNumbers = () => {
  return (dispatch) => {
    // console.log("getting total cart in basket")
    dispatch({
      type: GET_NUMBERS_BASKET,
      // payload: item
    });
  };
};
