import React, { Component } from "react";
import photo from "./edited.jpg";
export default class Photo extends Component{
    
render(){
    return(
        <React.Fragment>
        <div>       
        <h3><img className='vertical-align:middle;' src={process.env.PUBLIC_URL + "/edited.jpg"} width="150" height="150" alt="Photo"></img>
        Desalegn Abebaw Zeleke</h3>
        {/*This also works <img src={photo} width="150" height="150" alt="Photo"></img> */}
        </div>
         </React.Fragment>
         );

};
}