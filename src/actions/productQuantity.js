import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../types";


export const productQuantity = (action, name) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid
    const state = getState().firestore;
    var price = 0
    let cartobj = state.ordered.Users[0].cart;
    let productSelected = {...cartobj.products[name]};
    if(action === "increase")
    {
      productSelected.numbers += 1;
      cartobj={
        ...cartobj,
        cartPrice:parseFloat(cartobj.cartPrice)+parseFloat(cartobj.products[name].price),
        products:{
          ...cartobj.products,
          [name]:productSelected
        }
      }
    }else{
      if(productSelected.numbers > 1){
      productSelected.numbers -= productSelected.numbers>1? 1 : 0;
      cartobj={
        ...cartobj,
        cartPrice:productSelected.numbers>0 ? parseFloat(cartobj.cartPrice)-parseFloat(cartobj.products[name].price):cartobj.products[name].price,
        products:{
          ...cartobj.products,
          [name]:productSelected
        }
      }
    }
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
          type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
          payload: name,
        });
      })
      .catch((err) => {
        dispatch({
          
        });
      });
  };
};
export const clearProduct = (name) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid
    const state = getState().firestore;
    var price = 0
    let cartobj = state.ordered.Users[0].cart;
    let productSelected = {...cartobj.products[name]};
    productSelected.inCart=false;
    cartobj = {
      ...cartobj,
      cartPrice:parseFloat(cartobj.cartPrice) - (parseFloat(productSelected.numbers) * parseFloat(productSelected.price)),
      cart:cartobj.cart-1,
      products:{
        ...cartobj.products,
        [name]:productSelected
      }
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
          type: CLEAR_PRODUCT,
          payload: name,
        });
      })
      .catch((err) => {
        dispatch({
          
        });
      });
  };
};


export const details = (name) => {
  console.log(name)
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid
    const state = getState().firestore;
    console.log("dim",name)
    firestore
      .collection("Users")
      .doc(authorId)
      .set({
        ...name
      },
      {merge:true}
      )
      .then(() => {
        dispatch({
          type: CLEAR_PRODUCT,
          payload: name,
        });
      })
      .catch((err) => {
        dispatch({
          
        });
      });
  };
};
