import React, { Component } from "react";
import { useLocation } from "react-router";
// const splitUrl=window.location.href.split("/");
const splitUrl=window.location.href;
export class NavBar extends Component{
  state={page:"home",};  
  
render(){
 
  
    return (<React.Fragment>
        
        <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
  <div className="container-fluid">
    <a className="navbar-brand" href="./MainContent">Portfilio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a  className= {splitUrl.includes("MainContent")?"nav-link active":"nav-link"} aria-current="page" href="./MainContent" >Basic</a>
        </li>
        <li className="nav-item">
          <a  className= {splitUrl.includes("Experience")?"nav-link active":"nav-link"} href="./Experience">Experience</a>
        </li>
        <li className="nav-item">
          <a  className= {splitUrl.includes("Projects")?"nav-link active":"nav-link"} href="./Projects">Projects</a>
        </li>
        <li className="nav-item">
          <a  className= {splitUrl.includes("Interest")?"nav-link active":"nav-link"} href="./Interest">Interest</a>
        </li>
        <li className="nav-item">
          <a className= {splitUrl.includes("Contacts")?"nav-link active":"nav-link"} href="./Contacts">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </React.Fragment>
        );
}
}
// onLinkClicked=(link)=>{
//       this.setState({page:link,});
  // }
