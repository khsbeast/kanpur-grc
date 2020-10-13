import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../actions/authActions";
import firebase from "../../../fire.js";

class Register extends Component {
  state = {
    email: "",
    password: "",
    cart:null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    const { uid,email,cart } = this.props;
    if (uid) {
      const dbRefrence = firebase.firestore();
      dbRefrence
          .collection("Users")
          .doc(uid).set(
          { email: email,
            cart : {cart:0,
              cartPrice:0,
            products:{}},
          name:"User",
          uid : uid },
          { merge: true })
      return <Redirect to="/" />;}
    return (
      <div>
        <div className="banner-top">
          <div className="container">
            <h3>Register</h3>
            <h4>
              <a href="/">Home</a>
              <label>/</label>Register
            </h4>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/*login*/}
        <div className="login">
          <div className="main-agileits">
            <div className="form-w3agile form1">
              <h3>Register</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="key">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <input type="text" id="email" onChange={this.handleChange} />
                  <div className="clearfix" />
                </div>
                <div className="key">
                  <i className="fa fa-lock" aria-hidden="true" />
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                  <div className="clearfix" />
                </div>
                <input type="submit" defaultValue="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  const email = state.firebase.auth.email;
  return {
    uid: uid,
    email:email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
