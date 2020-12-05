import React from 'react'
import { Link } from 'react-router-dom';
import './kitechen.css';
import { connect } from 'react-redux';
import Sliderproduct from '../Carousel/sliderproduct';
import { addToCart } from '../../../../actions/productActions';
import Title from '../../Components-new/Title/Title';
import Product from '../../Components-new/Product/Product';
import Notepad from "../../Components-new/Notepad/Notepad"

const Kitchenitem = (props) => {
    console.log(props);
    return (
        <div>
            
            <div className="grid1">
            
            </div>
            <div className="content-top">
                <div className="container ">
                    <Title title="Products" />
                    <div className="tab-pane active text-style" id="tab1">
                        <div className=" con-w3l ">
                        <div className="mew2"><div className="slick-slider slick-initialized slider-bk" dir="ltr">
                            <Sliderproduct state={props} />
                            <Notepad/>
                            <div className="clearfix" />
                        </div>
                </div>
                           
                        </div>
                    </div>
                    {/*content*/}
                    <div className="content-mid">
                        <div className="container">
                            <div className="col-md-4 m-w3ls">
                                <div className="col-md1 ">
                                    <Link to="/">
                                        <img src="images/co1.jpg" className="img-responsive img" alt="" />
                                        <div className="big-sa">
                                            <h6>New Collections</h6>
                                            <h3>Season<span>ing </span></h3>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 m-w3ls1">
                                <div className="col-md ">
                                    <Link to="/">
                                        <img src="images/co.jpg" className="img-responsive img" alt="" />
                                        <div className="big-sale">
                                            <div className="big-sale1">
                                                <h3>Big <span>Sale</span></h3>
                                                <p>It is a long established fact that a reader </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 m-w3ls">
                                <div className="col-md2 ">
                                    <Link to="/">
                                        <img src="images/co2.jpg" className="img-responsive img1" alt="" />
                                        <div className="big-sale2">
                                            <h3>Cooking <span>Oil</span></h3>
                                            <p>It is a long established fact that a reader </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md3 ">
                                    <Link to="/">
                                        <img src="images/co3.jpg" className="img-responsive img1" alt="" />
                                        <div className="big-sale3">
                                            <h3>Vegeta<span>bles</span></h3>
                                            <p>It is a long established fact that a reader </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    {/*content*/}

                    {/* another slider  */}
                    <div className="tab-pane active text-style" id="tab1" style={{ paddingBottom: '3rem' }}>
                        <Title title="Bestsellers" />
                        <div className="slick-slider slick-initialized slider-bk" dir="ltr">
                            <Sliderproduct state={props} />
                            <div className="clearfix" />
                        </div>
                    </div>
                    {/* End slider */}

                </div>
            </div>
        </div>

    )
}


export default connect(null, { addToCart })(Kitchenitem);