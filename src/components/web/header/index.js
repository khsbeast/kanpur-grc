import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Mobileheader from "../header/mobile-header";
import { connect } from "react-redux";
import { getCartNumbers } from "../../../actions/productActions";
import firebase from '../../../fire'
import { IconContext } from 'react-icons'
import { FaRegUserCircle } from "react-icons/fa";
import {Redirect} from "react-router-dom";


import './logout.css'
const db = firebase.firestore()
var nametook = ""

class Header extends Component {

    state = {
      search:"1",
      width: window.innerWidth,
      name:"default"
    }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  componentDidMount() {
    this.getdata()
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  Logout = () => {
    firebase.auth().signOut();
    return <Redirect to="/"/>
  }
  onSearch=(e)=> {
    this.setState({search:e.target.value})
  }

  getdata() {
    let details = {},
        cart = [],
        orders = [];
    firebase.auth().onAuthStateChanged(async user => {
        if(user){
        // console.log("User wala", user)
        const db = firebase.firestore();
        const data = await db.collection('Users').doc(this.props.user
        ).get();
        const DocumentOfUser = data.data();
        Object.keys(DocumentOfUser).forEach((userDocumentKey) => {
            const eachkeyInDocumentValues = DocumentOfUser[userDocumentKey];
                details[`${userDocumentKey}`] = eachkeyInDocumentValues;
        });
        this.setState({ 
            name: details["name"] ? details["name"].split(' ')[0] : "User"
        })
    }
    });
}

  render() {
    
    if (this.props.user) {
      var Login = <Grid item md={3} lg={3} xl={4}>
        <Grid container className="bk_cart_sd">
          <Grid item md={4} lg={4} xl={4}>
            <div style={{ display: "flex", paddingTop: "5px" }}>
              <IconContext.Provider value={{ color: "white", size: "3rem" }} >
                <FaRegUserCircle />
              </IconContext.Provider>
              {console.log(nametook)}
              <h4 style={{ color: "white", paddingLeft: "7px", paddingTop: "6px" }}>Welcome, {this.state.name}</h4>
            </div>
          </Grid>
          <Grid item md={4} lg={4} xl={4} className="btn_logout">
            <Link to={"/"}>
              <Button onClick={this.Logout} className="logout" variant="outlined">
                <span>Logout</span>
              </Button>
            </Link>
          </Grid>
          <Grid item md={4} lg={4} xl={4} className="cart">
            <Link to="/carts">
              <Button className="cart_item" variant="outlined">
                <span className="item_count">
                  {this.props.cartProps.cart}
                </span>
                <i
                  className="fa fa-shopping-cart my-cart-icon"
                  aria-hidden="true"
                />
                <span>Cart</span>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    }
    else {
      Login = <Grid item md={3} lg={3} xl={4}>
        <Grid container className="bk_cart_sd">
          <Grid item md={6} lg={6} xl={6} className="btn_login">
            <Link to={"/login"}>
              <Button className="login" variant="outlined">
                <span>Login</span>
              </Button>
            </Link>
          </Grid>
          <Grid item md={6} lg={6} xl={6} className="cart">
            <Link to="/carts">
              <Button className="cart_item" variant="outlined">
                <span className="item_count">
                  {this.props.cartProps.cart}
                </span>
                <i
                  className="fa fa-shopping-cart my-cart-icon"
                  aria-hidden="true"
                />
                <span>Cart</span>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    }
    const { width } = this.state;
    const isMobile = width <= 800;
    if (isMobile) {
      return (
        <div>
          <Mobileheader />
        </div>
      );
    } else {
      return (
        <div>
          {/* <Link to="#"><img src="images/download.png" className="img-head" alt="download" /></Link> */}
          <Grid container className="header_info">
            <Grid item lg={1} xl={2}></Grid>
            <Grid item md={12} lg={11} xl={10} className="header_fixed">
              <Grid container>
                <Grid item md={3} lg={2} xl={2}>
                  <div className="logo">
                    <h1>
                      <Link to="#">
                        <b>
                          T<br />H<br />E
                        </b>
                        1KG<span>Smart Buyer's Choice</span>
                      </Link>
                    </h1>
                  </div>
                </Grid>
                <Grid item md={6} lg={7} xl={6}>
                  <div className="search-form">
                    <form action="#" method="post">
                      <input
                        type="text"
                        name="search"
                        onChange={this.onSearch}
                        placeholder="Search for Products..."
                      />
                      <button className="btn search__btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </Grid>
                {Login}
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="header_info_2">
            {/* nav bar  */}
            <Grid item md={1} lg={1} xl={1} className="cart_nav_header"></Grid>
            <Grid item md={11} lg={11} xl={11} className="cart_nav_header">
              <div className="nav-top">
                <nav className="navbar navbar-default">
                  <div className="navbar-header nav_2">
                    <button
                      type="button"
                      className="navbar-toggle collapsed navbar-toggle1"
                      data-toggle="collapse"
                      data-target="#bs-megadropdown-tabs"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className="collapse navbar-collapse"
                    id="bs-megadropdown-tabs"
                  >
                    <ul className="nav navbar-nav ">
                      <li className="active">
                        <Link to="/" className="hyper ">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li className="dropdown ">
                        <Link to="/kitchen" className="dropdown-toggle  hyper">
                          <span>
                            Grocery & Staples
                            <b className="caret" />
                          </span>
                        </Link>
                        <ul className="dropdown-menu multi">
                          <div className="row">
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen/a1">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    a1
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen/a2">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                   a2
                                  </Link>
                                </li>"
                                <li>
                                  <Link to="/kitchen/a3">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    a3
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Branded Food
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Breakfast &amp; Cereal
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Snacks
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Spices
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Biscuit &amp; Cookie
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Sweets
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Pickle &amp; Condiment
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Instant Food
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Dry Fruit
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Tea &amp; Coffee
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3 w3l">
                              <Link to="/kitchen">
                                <img
                                  src="images/me.png"
                                  className="img-responsive"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </ul>
                      </li>

                      <li className="dropdown ">
                        <Link to="/kitchen" className="dropdown-toggle  hyper">
                          <span>
                            Beverages
                            <b className="caret" />
                          </span>
                        </Link>
                        <ul className="dropdown-menu multi">
                          <div className="row">
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Water &amp; Beverages
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Fruits &amp; Vegetables
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    {" "}
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Staples
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Branded Food
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Breakfast &amp; Cereal
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Snacks
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Spices
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Biscuit &amp; Cookie
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Sweets
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Pickle &amp; Condiment
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Instant Food
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Dry Fruit
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Tea &amp; Coffee
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3 w3l">
                              <Link to="/kitchen">
                                <img
                                  src="images/me.png"
                                  className="img-responsive"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </ul>
                      </li>

                      <li className="dropdown ">
                        <Link to="/kitchen" className="dropdown-toggle  hyper">
                          <span>
                            Breakfast & Dairy
                            <b className="caret" />
                          </span>
                        </Link>
                        <ul className="dropdown-menu multi">
                          <div className="row">
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Water &amp; Beverages
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Fruits &amp; Vegetables
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    {" "}
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Staples
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Branded Food
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Breakfast &amp; Cereal
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Snacks
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Spices
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Biscuit &amp; Cookie
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Sweets
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Pickle &amp; Condiment
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Instant Food
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Dry Fruit
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/kitchen">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Tea &amp; Coffee
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3 w3l">
                              <Link to="/kitchen">
                                <img
                                  src="images/me.png"
                                  className="img-responsive"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle hyper"
                          data-toggle="dropdown"
                        >
                          <span>
                            {" "}
                            Personal Care <b className="caret" />
                          </span>
                        </Link>
                        <ul className="dropdown-menu multi multi1">
                          <div className="row">
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />{" "}
                                    Ayurvedic{" "}
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Baby Care
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Cosmetics
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Deo &amp; Purfumes
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/care">
                                    {" "}
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Hair Care{" "}
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Oral Care
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Personal Hygiene
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Skin care
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />{" "}
                                    Fashion Accessories{" "}
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Grooming Tools
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Shaving Need
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/care">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Sanitary Needs
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3 w3l">
                              <Link to="/care">
                                <img
                                  src="images/me1.png"
                                  className="img-responsive"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle hyper"
                          data-toggle="dropdown"
                        >
                          <span>
                            Household
                            <b className="caret" />
                          </span>
                        </Link>
                        <ul className="dropdown-menu multi multi2">
                          <div className="row">
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Cleaning Accessories
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    CookWear
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Detergents
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Gardening Needs
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Kitchen &amp; Dining
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    KitchenWear
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Pet Care
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Plastic Wear
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Pooja Needs
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Serveware
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Safety Accessories
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/house-hold">
                                    <i
                                      className="fa fa-angle-right"
                                      aria-hidden="true"
                                    />
                                    Festive Decoratives{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-3 w3l">
                              <Link to="/house-hold">
                                <img
                                  src="images/me2.png"
                                  className="img-responsive"
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </ul>
                      </li>
                      {/* <li><Link to="/contact" className="hyper"><span>Contact Us</span></Link></li> */}
                    </ul>
                  </div>
                </nav>
                <div className="clearfix" />
              </div>
            </Grid>
            {/* end nav bar  */}
          </Grid>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
  user: state.firebase.auth.uid,
});

export default connect(mapStateToProps, { getCartNumbers })(Header);
