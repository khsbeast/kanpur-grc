import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
import { addToCart } from '../../../../actions/productActions'
import { connect } from 'react-redux'


const Product = (props) => {
    console.log(props)
    const [qty,updatedqty] = useState(1);
    console.log(qty)
    const prod = {
       [props.id]:{category: props.category,
       name:props.name,
       numbers:qty,
       price:props.pricenew,
       tagName:props.id
       }
    }
    console.log(prod)
    return (
        <div className="col-md-3 m-wthree">
        <div className="col-m" >
        <div className="img-hover-zoom" >
            <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img">
               <img src={props.image} className="img-responsive" alt={props.title} />
                <div className="offer"><p><span>Offer</span></p></div>
            </Link>
            <div className="mid-1">
                <div className="women">
                    <h6><Link to="/product-details">{props.title}</Link>(1 kg)</h6>
                </div>
                <div className="mid-2">
                    <p><label>₹{props.priceold}</label> <span><h4 style={{ color:"#000"}} className="item_price">₹{props.pricenew}</h4></span></p>
                    <div className="block">
                        <div className="starbox small ghosting"> </div>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="quantity-select">
                <div className="entry value-minus" onClick={qty>1?() => updatedqty(qty - 1):null}>&nbsp;</div>
                <div className="entry value"><span className="span-1">{qty}</span></div>
                <div className="entry value-plus active" onClick={() => updatedqty(qty + 1)}>&nbsp;</div>
                 </div>
                <div className="add">
                    <button className="btn btn-danger btn-outline-danger my-cart-btn my-cart-b buttn" onClick={() => props.addToCart(prod)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}


export default connect(null,{ addToCart })(Product);