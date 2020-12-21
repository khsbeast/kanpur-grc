import React from 'react'
import hosp from '../../../../images/hospital.svg'
import store from '../../../../images/store.jpg'
import Title from '../Title/Title'
import "./pharma.css"
import { Link } from 'react-router-dom';
import Notepad from '../Notepad/Notepad'

const pharma = () => {
    return (
        <div className="container2">
            <div className="headspace">
                <div className="cent">
                <img src={hosp} width="100px" height="100px" />
                </div>
                <Title title="The Pharma Store"></Title>
            </div>
            <div className="flex">
                <div>
                    <img src={store} width="650px"  />
                </div>
                <div style={{marginLeft:"10vh"}}>
                    <div className="heading"> About Us</div>
                    <div>
                        <p className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div style={{display:"flex",justifyContent:"space-around" ,marginTop:"3vh"}}>
                        <ul className="social-fo">
                            <li><Link to="#" className=" face"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" twi"><i className="fa fa-twitter" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true" /></Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"25px"}} >
            <Title  title="Order Now"></Title>
            </div>
            <div className="flex cent" style={{marginTop:"25px"}}>
                <Notepad style={{margin:"0px"}}/>
            </div>
        </div>
    )
}

export default pharma
