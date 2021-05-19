import React from "react"
import LooPic from "../components/LooPic"
import ToiletPic from "../components/ToiletPic"
import Comment from "../components/comment"
function Welcomeuser() {
    return (
        <div className = "container">
            <div className = "mt-5 row d-flex justify-content-between">
                    <LooPic />
                    <h2 style={{ borderWidth: "10px" }} className=" p-3 m-3 border border-secondary border-5">WELCOME USERS,</h2>
            </div>
            <div className="row">  
                <h2 style={{ borderWidth: "10px" }} className=" p-3 m-3 border border-secondary border-5 ">RECENT BATHROOMS</h2> 
                     </div>


            <div className="row">
                <div className="col-sm-6">
                    <ToiletPic />
                </div>
                <div className="col-sm-6">
                    <Comment />
                </div>


            </div>
        </div>


    )
}
export default Welcomeuser