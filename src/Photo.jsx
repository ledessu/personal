import React, { Component } from "react";
import photo from "./edited.jpg";
export default class Photo extends Component{
    
render(){
    return(
        <div>       
        <img src={process.env.PUBLIC_URL + "/edited.jpg"} width="150" height="150" alt="Photo"></img>
        {/*This also works <img src={photo} width="150" height="150" alt="Photo"></img> */}
        </div>)
};
}