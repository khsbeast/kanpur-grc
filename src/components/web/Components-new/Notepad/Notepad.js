import React, { useState } from 'react'
import "./Notepad.css"
import ScriptTag from "react-script-tag"

const arr2 = []

const Notepad = () => {
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
        setarr(arr3)
    }
    return (
        <div>
        {console.log(arr)}
            <div className="card" style={{overflow:"auto"}}>
                <div style={{ paddingTop: "2vh", paddingBottom: "1vh", background: "#c8232c" }}>
                    <h3 className="heading2" style={{ color: "#fff" }}>Notepad</h3>
                </div>
                <div style={{ display: "flex" }}>
                    <input className="input" placeholder="Enter Items and Quantity" onChange={changehandler} type="text" />
                    <button className="roundbtn" onClick={submithandler}>+</button>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",marginTop:"16px",marginRight:"22px",marginBottom:"20px"}}>
                    <div className="subhead">
                         Product :
                         <div style={{marginTop:"20px"}}>
                             <div className="prod">
                                 {arr.map((prods) => {
                                     return <div className="prod">{prods.name}</div>
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
            <button>Checkout</button>
        </div>
    )
}

export default Notepad;
