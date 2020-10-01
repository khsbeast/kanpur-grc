import React,{useEffect,useState} from 'react'
import { Grid, Card } from '@material-ui/core/';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../../actions/productQuantity'
import './cart.css';
function Cart({ cartProps, productQuantity, clearProduct }) {

    let productsInCart =[]

  // Similar to componentDidMount and componentDidUpdate:
    if(cartProps.products){
    Object.keys(cartProps.products).forEach(function (item) {
        if (cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
    })
    console.log("ye bta",productsInCart)}

    return (
        <div>
            <Grid container className="shopping_cart">
                <Grid item md={2} lg={2} xl={2}></Grid>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <div className="spec ">
                        <h3>Shopping Cart</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                            <table className="table ">
                                <tbody><tr>
                                    <th className="t-head head-it ">Products</th>
                                    <th className="t-head">Price</th>
                                    <th className="t-head">Quantity</th>
                                    <th className="t-head">Total</th>
                                </tr>
                                    {
                                        productsInCart.map((product, index) => {
                                            return (
                                                <tr className="cross1" key={index}>
                                                    <td className="t-data ring-in">
                                                        <Link className="at-in"><img src="images/wi1.png" className="img-responsive" alt="" /></Link>
                                                        <div className="sed">
                                                            <h5>{product.name}</h5>
                                                        </div>
                                                        <div className="clearfix"> </div>
                                                        <div className="close2" onClick={() => clearProduct(product.tagName)}> <i className="fa fa-times" aria-hidden="true" /></div>
                                                    </td>
                                                    <td className="t-data">{product.price}</td>
                                                    <td className="t-data"><div className="quantity">
                                                        <div className="quantity-select">
                                                            <div className="entry value-minus" onClick={() => productQuantity('decrease', product.tagName)}>&nbsp;</div>
                                                            <div className="entry value"><span className="span-1">{product.numbers}</span></div>
                                                            <div className="entry value-plus active" onClick={() => productQuantity('increase', product.tagName)}>&nbsp;</div>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td className="t-data t-w3l">{product.price * product.numbers}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className="price_details_bk">
                            <Card>
                                <span className="title">Price details</span>
                                <div class="_2twTWD">
                                    <div class="hJYgKM">
                                        <div class="_10vVqD">Price ({cartProps.cart} item)</div>
                                        <span> ₹{cartProps.cartPrice}</span>
                                    </div>
                                    <div class="hJYgKM">
                                        <div class="_10vVqD">Delivery Fee</div>
                                        <span><span class="_27kB8M _3Oa-sk">Free</span></span>
                                    </div>
                                    <div class="_3xFQAD">
                                        <div class="hJYgKM">
                                            <div class="_10vVqD">Total Amount</div>
                                            <span>
                                                <div class="tnAu1u">
                                                    <span > ₹{cartProps.cartPrice}</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_22vQVX">You will save ₹210 on this order</div>
                                </div>
                                <Link to="/checkout">
                                    <div className="process_checkout_bk">
                                        <span>Proceed to Checkout</span>
                                    </div>
                                </Link>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid> */}
            </Grid>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cartProps: state.cartState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);







// import React, { Component } from "react";
// import { Grid, Card } from "@material-ui/core/";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import {
//   productQuantity,
//   clearProduct,
// } from "../../../actions/productQuantity";
// import "./cart.css";
// import firebase from "../../../fire";
// import { CardTravelSharp } from "@material-ui/icons";

// class Cart extends Component {
//   state = {
//     user: true,
//     products:{},
//     cartPrice:0,
//     items:0,

//   };
//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     firebase.auth().onAuthStateChanged(async (user) => {
//       if (user) {
//         console.log("user ",user);
//         get data 
//         let details={},cart={},productsInCart=[]
//         const db = firebase.firestore();
//         const data = await db.collection("Users").doc(user.uid).get();
//         const DocumentOfUser = data.data();
//         console.log("f",DocumentOfUser)
//         Object.keys(DocumentOfUser).forEach((userDocumentKey) => {
//                   const eachkeyInDocumentValues = DocumentOfUser[userDocumentKey];
//                   if (typeof eachkeyInDocumentValues == "object") {
//                     if (eachkeyInDocumentValues["products"])
//                       basically here DocumentOfUser[userDocumentKey] = [{ame:ada},{nama,ad}]
//                       cart = { ...eachkeyInDocumentValues["products"] };
//                     cart["cartPrice"] = 0;
//                     cart["cart"] = 0;
//                     Object.keys(eachkeyInDocumentValues).forEach((tagname)=>{
//                          let tempObject = {};
//                          const Item = eachkeyInDocumentValues[tagname]; //object cart/orders
//                         // Object.keys(Item).forEach((key) => {
//                         //     tempObject[`${key}`] = Item[key];
//                         // });
//                         if (eachkeyInDocumentValues[tagname]["cart"]) cart.push(tempObject);
//                         //else if (eachkeyInDocumentValues[tagname]["orders"]) orders.push(tempObject);
//                     if (eachkeyInDocumentValues["cartPrice"])
//                       cart["cartPrice"] += eachkeyInDocumentValues["cartPrice"];
//                     if (eachkeyInDocumentValues["cart"])
//                       cart["cart"] += eachkeyInDocumentValues["cart"];
//                     console.log("Bois",cart)
//                   } else {
//                     details[`${userDocumentKey}`] = eachkeyInDocumentValues;
//                   }
//                 });
//       }
//       else {
//         console.log("ya")
//         this.setState({ user:null });
//       }
//     });
//   }

//   render() {
//       if(this.state.user === null){
//          return <Redirect to="/" />
//      }

//     let cart = {},
//       details = {},
//       productsInCart = [];
//     firebase.auth().onAuthStateChanged(async (user) => {
//       if (user) {
//         //console.log("User wala", user)
//         const db = firebase.firestore();
//         const data = await db.collection("Users").doc(user.uid).get();
//         const DocumentOfUser = data.data();
//         Object.keys(DocumentOfUser).forEach((userDocumentKey) => {
//           const eachkeyInDocumentValues = DocumentOfUser[userDocumentKey];
//           //console.log("cart dekh",eachkeyInDocumentValues)
//           if (typeof eachkeyInDocumentValues == "object") {
//             if (eachkeyInDocumentValues["products"])
//               //basically here DocumentOfUser[userDocumentKey] = [{ame:ada},{nama,ad}]
//               cart = { ...eachkeyInDocumentValues["products"] };
//             cart["cartPrice"] = 0;
//             cart["cart"] = 0;
//             // Object.keys(eachkeyInDocumentValues).forEach((tagname)=>{
//             //      let tempObject = {};
//             //      const Item = eachkeyInDocumentValues[tagname]; //object cart/orders
//             //     // Object.keys(Item).forEach((key) => {
//             //     //     tempObject[`${key}`] = Item[key];
//             //     // });
//             //     if (eachkeyInDocumentValues[tagname]["cart"]) cart.push(tempObject);
//             //     //else if (eachkeyInDocumentValues[tagname]["orders"]) orders.push(tempObject);
//             if (eachkeyInDocumentValues["cartPrice"])
//               cart["cartPrice"] += eachkeyInDocumentValues["cartPrice"];
//             if (eachkeyInDocumentValues["cart"])
//               cart["cart"] += eachkeyInDocumentValues["cart"];
//           } else {
//             details[`${userDocumentKey}`] = eachkeyInDocumentValues;
//           }
//         });

//         details["cart"] = cart;
//         //details["orders"] = orders;
//         //console.log(details);
//         //console.log(details["name"]);
//         console.log("ye dekh to", details);

//         let tempCart = [];
//         details["cart"]["cartPrice"] = 0;
//         details["cart"]["cart"] = 0;
//         Object.keys(cart).forEach(function (tagname) {
//           if (typeof cart[tagname] == "object") {
//             tempCart.push(cart[tagname]);
//             if (cart[tagname]) {
//               details["cart"]["cartPrice"] +=
//                 cart[tagname]["price"] * cart[tagname]["numbers"];
//               console.log(details["cart"]["cartPrice"]);
//               console.log("chal gya chutiya");
//               details["cart"]["cart"] += cart[tagname]["numbers"];
//               console.log(details["cart"]["cart"]);
//             }
//           }
//         });
//         console.log("ye final hai kya", tempCart);
//        // setcartItems(tempCart);
//        // setcartTotal([details["cart"]["cart"], details["cart"]["cartPrice"]]);
//       } //async auth closed
//       /* Remove arrow function */
//       //data fetched
//       // console.log("cart number", cartProps)
//       //if(productsInCart.length)
//     });

//     return (
//       <div>
//         <Grid container className="shopping_cart">
//           <Grid item md={2} lg={2} xl={2}></Grid>
//           <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
//             <div className="spec ">
//               <h3>Shopping Cart</h3>
//               <div className="ser-t">
//                 <b />
//                 <span>
//                   <i />
//                 </span>
//                 <b className="line" />
//               </div>
//             </div>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
//                 <table className="table ">
//                   <tbody>
//                     <tr>
//                       <th className="t-head head-it ">Products</th>
//                       <th className="t-head">Price</th>
//                       <th className="t-head">Quantity</th>
//                       <th className="t-head">Total</th>
//                     </tr>
//                     {productsInCart.map((product, index) => {
//                       return (
//                         <tr className="cross1" key={index}>
//                           <td className="t-data ring-in">
//                             <Link className="at-in">
//                               <img
//                                 src="images/wi1.png"
//                                 className="img-responsive"
//                                 alt=""
//                               />
//                             </Link>
//                             <div className="sed">
//                               <h5>{product.name}</h5>
//                             </div>
//                             <div className="clearfix"> </div>
//                             <div
//                               className="close2"
//                               onClick={() => clearProduct(product.tagName)}
//                             >
//                               {" "}
//                               <i className="fa fa-times" aria-hidden="true" />
//                             </div>
//                           </td>
//                           <td className="t-data">{product.price}</td>
//                           <td className="t-data">
//                             <div className="quantity">
//                               <div className="quantity-select">
//                                 <div
//                                   className="entry value-minus"
//                                   onClick={() =>
//                                     productQuantity("decrease", product.tagName)
//                                   }
//                                 >
//                                   &nbsp;
//                                 </div>
//                                 <div className="entry value">
//                                   <span className="span-1">
//                                     {product.numbers}
//                                   </span>
//                                 </div>
//                                 <div
//                                   className="entry value-plus active"
//                                   onClick={() =>
//                                     productQuantity("increase", product.tagName)
//                                   }
//                                 >
//                                   &nbsp;
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="t-data t-w3l">
//                             {product.price * product.numbers}
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={3}
//                 lg={3}
//                 xl={3}
//                 className="price_details_bk"
//               >
//                 <Card>
//                   <span className="title">Price details</span>
//                   <div class="_2twTWD">
//                     <div class="hJYgKM">
//                       <div class="_10vVqD">Price (item)</div>
//                       <span> ₹</span>
//                     </div>
//                     }
//                     <div class="hJYgKM">
//                       <div class="_10vVqD">Delivery Fee</div>
//                       <span>
//                         <span class="_27kB8M _3Oa-sk">Free</span>
//                       </span>
//                     </div>
//                     <div class="_3xFQAD">
//                       <div class="hJYgKM">
//                         <div class="_10vVqD">Total Amount</div>
//                         <span>
//                           <div class="tnAu1u">
//                             <span> ₹</span>
//                           </div>
//                         </span>
//                       </div>
//                     </div>
//                     <div class="_22vQVX">You will save ₹210 on this order</div>
//                   </div>
//                   <Link to="/checkout">
//                     <div className="process_checkout_bk">
//                       <span>Proceed to Checkout</span>
//                     </div>
//                   </Link>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Grid>
//           {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid> */}
//         </Grid>
//       </div>
//     );
//   }
// }

// export default Cart;






// class Cart extends Component() {

//     ComponentDidMount {
//         firebase.auth().onAuthStateChanged(async user => {
//             if(user){
//             //console.log("User wala", user)
//             const db = firebase.firestore();
//             const data = await db.collection('Users').doc(user.uid
//             ).get();
//             const DocumentOfUser = data.data();
//             Object.keys(DocumentOfUser).forEach((userDocumentKey) => {
//                 const eachkeyInDocumentValues = DocumentOfUser[userDocumentKey];
//                 //console.log("cart dekh",eachkeyInDocumentValues)
//                 if (typeof eachkeyInDocumentValues == "object") {
//                     if (eachkeyInDocumentValues["products"])
//                     //basically here DocumentOfUser[userDocumentKey] = [{ame:ada},{nama,ad}]
//                         cart = {...eachkeyInDocumentValues["products"]}
//                         cart["cartPrice"]=0;
//                         cart["cart"]=0;
//                     // Object.keys(eachkeyInDocumentValues).forEach((tagname)=>{
//                     //      let tempObject = {};
//                     //      const Item = eachkeyInDocumentValues[tagname]; //object cart/orders
//                     //     // Object.keys(Item).forEach((key) => {
//                     //     //     tempObject[`${key}`] = Item[key];
//                     //     // });
//                     //     if (eachkeyInDocumentValues[tagname]["cart"]) cart.push(tempObject);
//                     //     //else if (eachkeyInDocumentValues[tagname]["orders"]) orders.push(tempObject);
//                     if(eachkeyInDocumentValues["cartPrice"])
//                         cart["cartPrice"] += eachkeyInDocumentValues["cartPrice"]
//                     if(eachkeyInDocumentValues["cart"])
//                         cart["cart"] += eachkeyInDocumentValues["cart"]}
//                 else {
//                     details[`${userDocumentKey}`] = eachkeyInDocumentValues;
//                 }
//             }
//         }

//             details["cart"] = cart;
//             //details["orders"] = orders;
//             //console.log(details);
//             //console.log(details["name"]);
//             console.log("ye dekh to",details);

//         let tempCart = []
//         details["cart"]["cartPrice"] = 0;
//         details["cart"]["cart"] = 0  ;
//         Object.keys(cart).forEach(function (tagname) {
//             if(typeof cart[tagname] == "object"){
//                 tempCart.push(cart[tagname])
//                 if(cart[tagname]){
//                     details["cart"]["cartPrice"] += cart[tagname]["price"] * cart[tagname]["numbers"] ;
//                     console.log(details["cart"]["cartPrice"])
//                     console.log("chal gya chutiya")
//                     details["cart"]["cart"] += cart[tagname]["numbers"]  ;
//                     console.log(details["cart"]["cart"])
//                 }
//             }
//             })
//         console.log("ye final hai kya",tempCart)
//         setcartItems(tempCart)
//         setcartTotal([details["cart"]["cart"],details["cart"]["cartPrice"]])
//         }) //async auth closed
//         /* Remove arrow function */
//         //data fetched
//         // console.log("cart number", cartProps)
//         //if(productsInCart.length)
//         }
//     })
//     render()
//     {
//     return (
//         <div>
//             <Grid container className="shopping_cart">
//                 <Grid item md={2} lg={2} xl={2}></Grid>
//                 <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
//                     <div className="spec ">
//                         <h3>Shopping Cart</h3>
//                         <div className="ser-t">
//                             <b />
//                             <span><i /></span>
//                             <b className="line" />
//                         </div>
//                     </div>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
//                             <table className="table ">
//                                 <tbody><tr>
//                                     <th className="t-head head-it ">Products</th>
//                                     <th className="t-head">Price</th>
//                                     <th className="t-head">Quantity</th>
//                                     <th className="t-head">Total</th>
//                                 </tr>
//                                     {
//                                         productsInCart.map((product, index) => {
//                                             return (
//                                                 <tr className="cross1" key={index}>
//                                                     <td className="t-data ring-in">
//                                                         <Link className="at-in"><img src="images/wi1.png" className="img-responsive" alt="" /></Link>
//                                                         <div className="sed">
//                                                             <h5>{product.name}</h5>
//                                                         </div>
//                                                         <div className="clearfix"> </div>
//                                                         <div className="close2" onClick={() => clearProduct(product.tagName)}> <i className="fa fa-times" aria-hidden="true" /></div>
//                                                     </td>
//                                                     <td className="t-data">{product.price}</td>
//                                                     <td className="t-data"><div className="quantity">
//                                                         <div className="quantity-select">
//                                                             <div className="entry value-minus" onClick={() => productQuantity('decrease', product.tagName)}>&nbsp;</div>
//                                                             <div className="entry value"><span className="span-1">{product.numbers}</span></div>
//                                                             <div className="entry value-plus active" onClick={() => productQuantity('increase', product.tagName)}>&nbsp;</div>
//                                                         </div>
//                                                     </div>
//                                                     </td>
//                                                     <td className="t-data t-w3l">{product.price * product.numbers}</td>
//                                                 </tr>
//                                             )
//                                         })
//                                     }
//                                 </tbody>
//                             </table>
//                         </Grid>
//                         <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className="price_details_bk">
//                             <Card>
//                                 <span className="title">Price details</span>
//                                 <div class="_2twTWD">
//                                     <div class="hJYgKM">
//                                         <div class="_10vVqD">Price ({cartTotal[0]} item)</div>
//                                         <span> ₹{cartTotal[1]}</span>
//                                     </div>
//                                     <div class="hJYgKM">
//                                         <div class="_10vVqD">Delivery Fee</div>
//                                         <span><span class="_27kB8M _3Oa-sk">Free</span></span>
//                                     </div>
//                                     <div class="_3xFQAD">
//                                         <div class="hJYgKM">
//                                             <div class="_10vVqD">Total Amount</div>
//                                             <span>
//                                                 <div class="tnAu1u">
//                                                     <span > ₹{cartTotal[1]}</span>
//                                                 </div>
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div class="_22vQVX">You will save ₹210 on this order</div>
//                                 </div>
//                                 <Link to="/checkout">
//                                     <div className="process_checkout_bk">
//                                         <span>Proceed to Checkout</span>
//                                     </div>
//                                 </Link>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid> */}
//             </Grid>
//         </div>
//     )
//     }
// }

// export default Cart;
