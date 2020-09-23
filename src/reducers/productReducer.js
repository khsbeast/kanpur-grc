import {
  ADD_TO_CART,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../types";
import firebase from "../fire"
import store from "../store"

var cartObj = {},flag=true;

let initialState = {
   cart: 0,
   cartPrice: 0,
  // products: {
  //   moong: {
  //     name: "Moong",
  //     price: 12.0,
  //     tagName: "moong",
  //     numbers: 0,
  //     inCart: false,
  //   },
  //   sunflower: {
  //     name: "Sunflower oil",
  //     price: 70.0,
  //     tagName: "sunflower",
  //     numbers: 0,
  //     inCart: false,
  //   },
  //   kabuli: {
  //     name: "Kabuli Chana(1 kg)",
  //     price: 80.0,
  //     tagName: "kabuli",
  //     numbers: 0,
  //     inCart: false,
  //   },
  //   soyachunks: {
  //     name: "Soya Chunks(1 kg)",
  //     price: 90.0,
  //     tagName: "soyachunks",
  //     numbers: 0,
  //     inCart: false,
  //   },
  // },
  products: {}
};

let products = {}

export default (state = initialState, action) => {
  let productSelected = "";
  const dbref = firebase.firestore();
  let user = firebase.auth().currentUser;
  if(user){
    if(flag){
      dbref.collection("Users").doc(user.uid).get().then((doc)=>{
      //console.log("cartadding", doc.data(),doc.data()["email"])
      //doc.data().set(initialState["products"],{merge:true})
      //dbref.collection("Users").doc(user.uid).set({cart:initialState["products"]},{merge:true})
      //dbref.collection("Products").doc(user.uid).set(initialState["products"],{merge:true})
      cartObj = {...doc.data()["cart"]}
      console.log("cart me add hogya",doc.data())
    })
      flag=false;
    }
    //cartobj = database
    //dbref.collection("Users").doc(user.uid).set({cart:cartObj},{merge:true})
    //console.log("yey",user,user.uid)
    
  }

  dbref.collection("Products").doc("bdY066ZAObTGOaWl2pWC05IRg382").get().then((doc)=>{
    //console.log("products data", doc.data())
    Object.keys(doc.data()).map((tagname)=>{
      products[`${tagname}`]=doc.data()[tagname]
    })
  })
  console.log("state",state)  

  //console.log("products aa gye",initialState.products)
    switch (action.type) {
      case ADD_TO_CART:
        productSelected = { ...products[action.payload] };
        console.log("productSelected",productSelected)
        if(cartObj["products"])
          if(cartObj["products"][action.payload]){
            console.log("ek aur add hua")
            productSelected.numbers = cartObj["products"][action.payload]["numbers"]+1;
            //cartObj["cartPrice"]+=cartObj["products"][action.payload]["price"]
            //cartObj["cart"]+=1;
          }
          else
            productSelected.numbers = 1;
        productSelected.inCart = true;
          cartObj = {
            ...state,
            cart: state.cart +1  ,
            cartPrice: state.cartPrice + products[action.payload].price,
            products: {
              ...state.products,
              [action.payload]: productSelected,
            },
          };
        console.log("cart obj")//,cartObj,initialState["products"])
        dbref.collection("Users").doc(user.uid).set({cart:cartObj},{merge:true})
        return cartObj
      case GET_NUMBERS_BASKET:
        return {
          ...state,
        };

      case INCREASE_QUANTITY:
        productSelected = { ...state.products[action.payload] };
        productSelected.numbers += 1;
        return {
          ...state,
         //cart: state.cart + 1,
          //cartPrice: state.cartPrice + state.products[action.payload].price,
          products: {
            ...state.products,
            [action.payload]: productSelected,
          },
        };

      case DECREASE_QUANTITY:
        productSelected = { ...state.products[action.payload] };
        let newCartPrice = 0;
        let newCartNumbers = 0;
        if (productSelected.numbers === 0) {
          productSelected.numbers = 0;
          newCartPrice = state.cartPrice;
          newCartNumbers = state.cart;
        } else {
          productSelected.numbers -= 1;
          newCartPrice = state.cartPrice - state.products[action.payload].price;
          newCartNumbers = state.cart - 1;
        }
        return {
          ...state,
          cart: newCartNumbers,
          cartPrice: newCartPrice,
          products: {
            ...state.products,
            [action.payload]: productSelected,
          },
        };

      case CLEAR_PRODUCT:
        productSelected = { ...state.products[action.payload] };
        let numbersBackup = productSelected.numbers;
        productSelected.numbers = 0;
        productSelected.inCart = false;
        return {
          ...state,
          cartPrice: state.cartPrice - numbersBackup * productSelected.price,
          cart: state.cart - numbersBackup,
          products: {
            ...state.products,
            [action.payload]: productSelected,
          },
        };

      default:
        return state;
  }
};
