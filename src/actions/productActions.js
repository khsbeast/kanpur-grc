import { ADD_TO_CART, GET_NUMBERS_BASKET } from "../types";
export const addToCart = (prod) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid
    const state = getState().firestore;
    var cartno = 0
    var cartsum = 0
    var cartobj = state.ordered.Users[0].cart
    cartobj = {
      ...cartobj,
      products:{
        ...cartobj.products,
        ...prod
      }
    }
    Object.keys(cartobj.products).forEach((product) => {
      if(cartobj.products[product].inCart){
        cartno += 1;
        cartsum += cartobj.products[product].price * cartobj.products[product].numbers;
      }
    })
    cartobj={
      ...cartobj,
      cart:cartno,
      cartPrice:cartsum
    }
    firestore
      .collection("Users")
      .doc(authorId)
      .set({
        cart:cartobj
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
