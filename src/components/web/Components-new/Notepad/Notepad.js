import React, { useState } from 'react'
import "./Notepad.css"
import ScriptTag from "react-script-tag"
import { firestoreConnect } from "react-redux-firebase";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { notepad } from "../../../../actions/productQuantity"

const arr2 = []
let note = {}

const Notepad = ({data,notepad}) => {
    console.log(data);
    const [prod, setprod] = useState(null);
    const [arr, setarr] = useState([]);

    const changehandler = (e) => {
        setprod({
            price : 0,
            name : e.target.value,
            icon : 0
        })
    }
    const submithandler = (e) => {
        arr2.push(prod)
        const arr3 = [...arr2]
        note = {
            notepad:{
                ...arr3
            }
        }
        console.log(note);
        setarr(arr3)
    }
    const checkhandler = (e) => {
       notepad(note)
    }
    const deletehandler = (e) => {
        const arr3 = []
    }
    return (
        <div>
        {console.log(arr)}
            <div className="card" style={{overflow:"auto"}}>
                <div style={{ paddingTop: "2vh", paddingBottom: "1vh", background: "#c8232c" }}>
                    <h3 className="heading2" style={{ color: "#fff" }}>Notepad</h3>
                </div>
                <div style={{ display: "flex" }}>
                    <input className="input1" placeholder="Enter Items and Quantity" onChange={changehandler} type="text" />
                    <button className="roundbtn" onClick={submithandler}>+</button>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",marginTop:"16px",marginRight:"22px",marginBottom:"20px"}}>
                    <div className="subhead">
                         Product :
                         <div style={{marginTop:"20px"}}>
                             <div className="prod">
                                 {arr.map((prods,i) => {
                                     return(
                                     
                                     <div className="prod">{prods.name}</div>

                                     )
                                 })}
                             </div>
                         </div>
                    </div>
                    <div className="subhead">
                         Price :
                         <div style={{marginTop:"20px"}}>
                             <div className="prod">
                                 {arr.map((prods) => {
                                     return <div className="prod">{prods.price}</div>
                                 })}
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            <button onClick={checkhandler}>Checkout</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        cartProps: state.cartState,
        data: state.firestore.ordered.Users,
    };
};

export default compose(
    connect(mapStateToProps, {notepad}),
    firestoreConnect((ownProps) => [
        {
            collection: "Users",
            doc: ownProps.uid
        },
    ])
)(Notepad);
