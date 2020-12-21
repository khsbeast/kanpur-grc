import React from 'react'
import "./rank.css"
import avt from "../../../../images/avt.png"
import crowns from "../../../../images/crowns.svg"


const rankprofile = () => {
    return (
        <div className="card1">
            <div style={{display:"flex",justifyContent:"centre",marginTop:"5px"}}>
            <img src={crowns} width="100px" height="100px" style={{"margin" : "auto"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"centre",marginTop:"5px"}}>
            <img src={avt} width="200px" height="200px" style={{"margin" : "auto"}}/>
            </div>
            <div className="subhead" style={{textAlign:"center",marginTop:"15px",fontSize:"25px",color:"#fec200",fontStyle:"italic"}}>
                #Rank : 1
            </div>
            <div className="subhead" style={{textAlign:"center",marginTop:"15px",fontSize:"20px"}}>
                Shraddha Kumar
            </div>
            <div className="subhead" style={{textAlign:"center",marginTop:"0px",fontSize:"20px"}}>
                Delhi
            </div>
        </div>
    )
}

export default rankprofile
