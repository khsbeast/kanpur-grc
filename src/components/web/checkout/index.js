// import { delivery } from "../../../actions/deliveryAction";
import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core/';
import Summarycart from './summarycart';
import { connect } from 'react-redux';
import { address } from '../../../actions/productQuantity'
import firebase from '../../../fire'
import store from '../../../store'
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Loader from '../../web/loader/loader'
import { FaRegEdit } from 'react-icons/fa';
import './check.css'
import {details} from '../../../actions/productQuantity'
const dbRefrence = firebase.firestore()

let add = {}

class Checkout extends Component {
    state = {
        name: "",
        number: "",
        pincode: "",
        address: "",
        city: "",
        state: "",
        addressfound: false,
        edit: false,
        warn : false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        add = {
            ...add,
            [e.target.id]: e.target.value,
        }
        console.log(add)
        console.log(this.state)
    };
    handleEdit = () => {
        this.setState({ edit: true })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // alert(store.getState().firebase.auth.uid);
        this.setState({ edit: false })
        const len = Object.keys(add).length;
        console.log(len)
        if(len === 6){
        this.props.details(add)
        this.setState({warn:false})
        }
        else
        this.setState({warn:true})
        /*const upload = dbRefrence
            .collection("Users")
            .doc(store.getState().firebase.auth.uid);
        upload.set(
            {
                name: this.state.name,
                number: this.state.number,
                pincode: this.state.pincode,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                addressfound: true,
            },
            { merge: true });*/
    }
    handleSubmit2 = (e) => {
        e.preventDefault();
        // alert(store.getState().firebase.auth.uid);
        console.log("yes")
        let imp = true;
        Object.keys(add).forEach(prop => {
            if(add[prop] === "")
            {
                imp = false
                this.setState({warn:true})
            }
        })
        if(imp)
        {
        this.props.details(add)
        this.setState({warn:false,edit : false})
        }
        /*const upload = dbRefrence
            .collection("Users")
            .doc(store.getState().firebase.auth.uid);
        upload.set(
            {
                name: this.state.name,
                number: this.state.number,
                pincode: this.state.pincode,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                addressfound: true,
            },
            { merge: true });*/
    }

    render() {
        console.log(this.props)
        const summary = <Summarycart title="Moong" price="10" qty="2" />
        if (this.props.data && this.props.uid) {
            console.log("11",this.props.uid);
            console.log("12",this.props.data);
            const Data = this.props.data[0];
            if (Data.addressfound) {
                var DeliveryForm = <Paper >
                    <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">2</span><span className="_1_m52b">Delivery Address</span></h3>
                    <Grid container spacing={4} className="address_bk_checkout ">
                        <div>
                            <p>Delivery Address : </p>
                            <br></br>
                            <p><span style={{ fontWeight: "bold", marginRight: "15px" }}>{Data.name}</span><span style={{ fontWeight: "bold" }}>{Data.number}</span></p>
                            <p>{Data.address},</p>
                            <p>{Data.city},{Data.state}-<span style={{ fontWeight: "bold" }}>{Data.pincode}</span></p>
                        </div>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div class="_1qbqu2 uK6xOa">
                                <button class="_2AkmmA EqjTfe _7UHT_c" type="button" onClick={this.handleEdit}><FaRegEdit style={{ paddingTop: "3px", paddingRight: "1px" }} />Edit</button>
                                <button class="_2AkmmA _237M5J" type="button" >Cancel</button>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>

            }
            else {
                var DeliveryForm = <Paper>
                    <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">2</span><span className="_1_m52b">Delivery Address</span></h3>
                    <Grid container spacing={4} className="address_bk_checkout ">
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="text" className="login-phone__input input" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="Number" className="address_field_bk__input input" id="number" placeholder="Number" onChange={this.handleChange} />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="Number" className="address_field_bk__input input" id="pincode" placeholder="Pincode" onChange={this.handleChange} />
                        </Grid>
                        {/*<Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                <input type="Number" className="address_field_bk__input input" data-test-id="phone-no-text-box" placeholder="Locality" />
            </Grid> */}
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="text" className="address_field_bk__input input" id="city" onChange={this.handleChange} placeholder="City/District/Town" />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={12} lg={12}>
                            <textarea className="address_field_bk__input input" id="address" onChange={this.handleChange} placeholder="Address(Area and Street)" />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="text" className="login-phone__input input" id="state" onChange={this.handleChange} placeholder="state" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            {/* <div className="_3XXwRR">
                    <p className="_2dwzAy">Address Type</p>
                    <div className="_3qg3HS">
                        <div>
                            <label htmlFor="HOME" className="_8J-bZE _2tcMoY">
                                <input type="radio" className="_2haq-9" name="locationTypeTag" readOnly id="HOME" defaultValue="on" />
                                <div className="_6ATDKp" />
                                <div className="_2o59RR"><span>Home (All day delivery)</span></div></label>
                            <label htmlFor="WORK" className="_8J-bZE _2tcMoY">
                                <input type="radio" className="_2haq-9" name="locationTypeTag" readOnly id="WORK" defaultValue="on" />
                                <div className="_6ATDKp" />
                                <div className="_2o59RR"><span>Work (Delivery between 10 AM - 5 PM)</span></div>
                            </label>
                        </div>
                    </div>
                </div> */}
                    
                {this.state.warn  ? <div className="warn">*Please fill all input fields</div> : null}
                            <div class="_1qbqu2 uK6xOa">
                                <button class="_2AkmmA EqjTfe _7UHT_c" type="button" onClick={this.handleSubmit}>Deliver Here</button>
                                <button class="_2AkmmA _237M5J" type="button" >Cancel</button>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            }
            if (this.state.edit) {
                var DeliveryForm = <Paper>
                    <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">2</span><span className="_1_m52b">Delivery Address</span></h3>
                    <Grid container spacing={4} className="address_bk_checkout ">
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="text" className="login-phone__input input" id="name" placeholder="Name" onChange={this.handleChange} defaultValue={Data.name|| ''} />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="text" className="address_field_bk__input input" id="number" placeholder="Number" onChange={this.handleChange} defaultValue={Data.number|| ''} />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="Number" className="address_field_bk__input input" id="pincode" placeholder="Pincode" onChange={this.handleChange} defaultValue={Data.pincode|| ''} />
                        </Grid>
                        {/*<Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
            <input type="Number" className="address_field_bk__input input" data-test-id="phone-no-text-box" placeholder="Locality" />
        </Grid> */}
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="text" className="address_field_bk__input input" id="city" onChange={this.handleChange} placeholder="City/District/Town" defaultValue={Data.city|| ''} />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={12} lg={12}>
                            <textarea className="address_field_bk__input input" id="address" onChange={this.handleChange} placeholder="Address(Area and Street)" defaultValue={Data.address|| ''} />
                        </Grid>
                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                            <input type="text" className="login-phone__input input" id="state" onChange={this.handleChange} placeholder="state" defaultValue={Data.state|| ''} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            {/* <div className="_3XXwRR">
                <p className="_2dwzAy">Address Type</p>
                <div className="_3qg3HS">
                    <div>
                        <label htmlFor="HOME" className="_8J-bZE _2tcMoY">
                            <input type="radio" className="_2haq-9" name="locationTypeTag" readOnly id="HOME" defaultValue="on" />
                            <div className="_6ATDKp" />
                            <div className="_2o59RR"><span>Home (All day delivery)</span></div></label>
                        <label htmlFor="WORK" className="_8J-bZE _2tcMoY">
                            <input type="radio" className="_2haq-9" name="locationTypeTag" readOnly id="WORK" defaultValue="on" />
                            <div className="_6ATDKp" />
                            <div className="_2o59RR"><span>Work (Delivery between 10 AM - 5 PM)</span></div>
                        </label>
                    </div>
                </div>
            </div> */}
                            {this.state.warn  ? <div className="warn">*Please fill all input fields</div> : null}
                            <div class="_1qbqu2 uK6xOa">
                                <button class="_2AkmmA EqjTfe _7UHT_c" type="button" onClick={this.handleSubmit2}>Submit</button>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            }
            return (
                <div>
                    <header className="header1 header1--white-mode">
                        <div className="header1-item header1-item--checkout-promise display--none@mobile">
                            <div className="checkout-promise-item checkout-promise-item--replacement-guarantee">100% Replacement Guarantee</div>
                            <div className="checkout-promise-item checkout-promise-item--genuine-products">100% Genuine Products</div>
                            <div className="checkout-promise-item checkout-promise-item--secure-payments">Secure Payments</div>
                        </div>
                    </header>
                    <Grid container style={{ marginTop: "90px" }}>
                        <Grid item md={2} xl={2} lg={2}></Grid>
                        <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
                                    {/* <Paper className="summary_bottom_size">
                                    <div className="checkout-step checkout-step--active">
                                        <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">1</span><span className="_1_m52b">Login or Signup</span></h3>
                                    </div>
                                    <Grid container className="_30BGxP">
                                        <Grid item xs={12} sm={12} md={12} xl={7} lg={7} className="login_bk_sk">
                                            <form>
                                                <div className="checkout-login__msg">We need your phone/email so that we can update you about your order.</div>
                                                <div className="login-phone">
                                                    <input type="text" className="login-phone__input input" data-test-id="phone-no-text-box" placeholder="Enter Email/Mobile Number" />
                                                    <input type="password" className="login-phone__input input" data-test-id="phone-no-text-box" placeholder="Enter Password" />
                                                    <div className="_3VM3wx">
                                                        By continuing, you agree to janakpurshop's
                                                    <Link className="_1eS5je" target="_blank" to="/term-and-condition">Terms of Use</Link> and
                                                    <Link className="_1eS5je" target="_blank" to="/privacy-and-policy"> Privacy Policy</Link>.
                                                </div>
                                                </div>
                                                <div className="_1-GI4s">
                                                    <button className="_2AkmmA T7K48m _7UHT_c" type="submit">
                                                        <div className="_2VTdOs _1_qmw3"><svg className="_2zN0mv" viewBox="25 25 50 50">
                                                            <circle stroke="#fff" className="_1VgS7d" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10">
                                                            </circle></svg>
                                                        </div>
                                                        <span>CONTINUE</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </Grid>
                                        <Grid item xl={5} lg={5}></Grid>
                                    </Grid>
                                </Paper> */}
                                    {/* 2nd block address */}
                                    {DeliveryForm}
                                    {/* 2nd end block address */}
                                    <Paper style={{ marginTop: '4.4rem' }}>
                                        <div className="checkout-step checkout-step--active">
                                            <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">4</span><span className="_1_m52b">Payment Options</span></h3>
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <h5>1. Credit / Debit / ATM Card</h5>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails className="card_details_parent">
                                                    <div className="credit_card_details">
                                                        <Grid container>
                                                            <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={8} lg={8}>
                                                                <div className="panel panel-default credit-card-box">
                                                                    <div className="panel-heading display-table">
                                                                        <div className="row display-tr">
                                                                            <h3 className="panel-title display-td">Payment Details</h3>
                                                                            <div className="display-td">
                                                                                <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" alt="accept" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="panel-body">
                                                                        <form id="payment-form">
                                                                            <div className="row">
                                                                                <div className="col-xs-12">
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="cardNumber">CARD NUMBER</label>
                                                                                        <div className="input-group">
                                                                                            <input type="tel" className="form-control" name="cardNumber" placeholder="Valid Card Number" autoComplete="cc-number" required autofocus />
                                                                                            <span className="input-group-addon"><i className="fa fa-credit-card" /></span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xs-7 col-md-7">
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                                                                                        <input type="tel" className="form-control" name="cardExpiry" placeholder="MM / YY" autoComplete="cc-exp" required />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xs-5 col-md-5 pull-right">
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="cardCVC">CV CODE</label>
                                                                                        <input type="tel" className="form-control" name="cardCVC" placeholder="CVC" autoComplete="cc-csc" required />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xs-12">
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="couponCode">COUPON CODE</label>
                                                                                        <input type="text" className="form-control" name="couponCode" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xs-12">
                                                                                    <button className="btn btn-success btn-lg btn-block" type="submit">Pay &#8377;444</button>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row" style={{ display: 'none' }}>
                                                                                <div className="col-xs-12">
                                                                                    <p className="payment-errors" />
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                >
                                                    <h5>2. Cash on Delivery</h5>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails className="card_details_parent">
                                                    <div className="clearfix"><div className="payment-confirm-tip" data-spm-anchor-id="a2a0e.payment_page.0.i6.28766af7uWKlE7">You can pay in cash to our courier when you receive the goods at your doorstep.</div></div>
                                                    <div id="to-payment"><button className="_continue">confirm order</button></div>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </div>
                                    </Paper>

                                </Grid>
                                <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                                    <Paper>
                                        <span className="summary_price_cart_details">Price details</span>
                                        <div className="_2twTWD">
                                            <div className="hJYgKM">
                                                <div className="_10vVqD">Price ({Data.cart.cart} item)</div>
                                                <span> ₹{Data.cart.cartPrice}</span>
                                            </div>
                                            <div className="hJYgKM">
                                                <div className="_10vVqD">Delivery Fee</div>
                                                <span><span className="_27kB8M _3Oa-sk">Free</span></span>
                                            </div>
                                            <div className="_3xFQAD">
                                                <div className="hJYgKM">
                                                    <div className="_10vVqD">Total Amount</div>
                                                    <span>
                                                        <div className="tnAu1u">
                                                            <span > ₹{Data.cart.cartPrice}</span>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="_22vQVX">You will save ₹210 on this order</div>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} xl={2} lg={2}></Grid>
                    </Grid>
                </div>
            )
        }
        else {
            return (
                <div style={{ paddingTop: window.innerHeight / 4, paddingBottom: window.innerHeight / 4 }}>
                    <Loader />
                </div>
            )
        }
    }

}
const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        cartProps: state.cartState,
        data: state.firestore.ordered.Users,
    };
};

export default compose(
    connect(mapStateToProps, {details}),
    firestoreConnect((ownProps) => [
        {
            collection: "Users",
            doc: ownProps.uid
        },
    ])
)(Checkout);