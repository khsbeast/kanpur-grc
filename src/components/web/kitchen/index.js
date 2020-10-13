import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Product from '../Components-new/Product/Product';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../../actions/productQuantity'
import firebase from "../../../fire"
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
var cateogryproducts = [];
let  route = null
var allProducts={}
class kitchen extends Component{
    state = {
            user: true,
            loaded:false
          };
    
    render(){
        console.log(this.state.products,this.props)
        /*if(!cateogryproducts.length)
            this.authListener()*/
            if(this.props.data.Products)
            cateogryproducts = Object.keys(this.props.data.Products[0]).map((pro)=>{
                if(this.props.data.Products[0][pro]["category"] === this.props["match"]["params"]["iq"])
                    return <Product title ="ok"  image="/images/co1.jpg" />  
    
        })
        return (
            
            <div>
                {console.log(this.props.data.Products)}
            {/* Carousel
================================================== */}
            <div id="myCarousel" className="carousel slide kic-top" data-ride="carousel">
                {/* Indicators */}
                <ol className=" carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <Link to="/"><img className="first-slide" src="/images/ba.jpg" alt="First slide" /></Link>
                    </div>
                    <div className="item">
                        <Link to="/"> <img className="second-slide " src="/images/ba1.jpg" alt="Second slide" /></Link>
                    </div>
                    <div className="item">
                        <Link to="/"><img className="third-slide " src="/images/ba2.jpg" alt="Third slide" /></Link>
                    </div>
                </div>
            </div>{/* /.carousel */}
            {/*content*/}
            {/*content*/}
            <div className="kic-top product">
                <div className="container">
                    <div className="spec ">
                        <h3>Products</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <div> 
                    {cateogryproducts}
                    </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>


        )
    }
    
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
      cartProps: state.cartState,
      user: state.firebase.auth.uid ? state.firebase.auth.uid : "",
      data: state.firestore.ordered,
    }
  };
  
  export default compose(connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "Products",
        doc:"bdY066ZAObTGOaWl2pWC05IRg382"
      }
    ]))(kitchen);
  

