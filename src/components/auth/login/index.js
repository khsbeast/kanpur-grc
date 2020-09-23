import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signIn } from "../../../actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  upload = () =>{

    let products = {
      moong: {
        name: "Moong",
        price: 12.0,
        tagName: "moong",
        numbers: 0,
        inCart: false,
      },
      sunflower: {
        name: "Sunflower oil",
        price: 70.0,
        tagName: "sunflower",
        numbers: 0,
        inCart: false,
      },
      kabuli: {
        name: "Kabuli Chana(1 kg)",
        price: 80.0,
        tagName: "kabuli",
        numbers: 0,
        inCart: false,
      },
      soyachunks: {
        name: "Soya Chunks(1 kg)",
        price: 90.0,
        tagName: "soyachunks",
        numbers: 0,
        inCart: false,
      },
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  
  render() {
    const { uid } = this.props;
    if (uid) {
      return <Redirect to = "/" /> 
    }return (
      <div>
        {/*banner*/}
        <div className="banner-top">
          <div className="container">
            <h3>Login</h3>
            <h4>
              <Link to="/">Home</Link>
              <label>/</label>Login
            </h4>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/*login*/}
        <div className="login">
          <div className="main-agileits">
            <div className="form-w3agile">
              <h3>Login</h3>
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
                <input type="submit" defaultValue="Login" />
              </form>
            </div>
            <div className="forg">
              <Link to="#" className="forg-left">
                Forgot Password
              </Link>
              <Link to="/register" className="forg-right">
                Register
              </Link>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
