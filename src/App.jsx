import React,{ Component } from "react";
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';
import {Switch} from 'react-router';
import {NavBar} from "./NavBar";
import MainContent from "./MainContent";
import Photo from "./Photo";
import Experience from "./Experience";
import Projects from "./Projects";
import Interest from "./Interest";
import Contact from "./Contact";

const splitUrl=window.location.href;
export default class App extends Component
{
render(){
    return (

        
        <React.Fragment>
        
        <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/MainContent">Portfilio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link  className= {splitUrl.includes("MainContent")?"nav-link active":"nav-link"} aria-current="page" to="/MainContent" >Basic</Link>
        </li>
        <li className="nav-item">
          <Link className= {splitUrl.includes("Experience")?"nav-link active":"nav-link"} to="/Experience">Experience</Link>
        </li>
        <li className="nav-item">
          <Link  className= {splitUrl.includes("Projects")?"nav-link active":"nav-link"} to="/Projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className= {splitUrl.includes("Interest")?"nav-link active":"nav-link"} to="/Interest">Interest</Link>
        </li>
        <li className="nav-item">
          <Link className= {splitUrl.includes("Contacts")?"nav-link active":"nav-link"} to="/Contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        {/* <div>
     <nav>
         <ul id="navigation">
             <li>
                 <Link to="/MainContent">Basic</Link>
             </li>
             <li>
                 <Link to="/Experience">Experience</Link>
             </li>
             <li>
                 <Link to="/Contacts">Contact</Link>
             </li>
         </ul>
     </nav>
</div> */}

        
        {/* <NavBar/> */}
        <Photo/>        
        {/* <Router > */}
        <Routes>        
        <Route  path='/Experience' element={<Experience/>} />
        <Route  path='/Projects' element={<Projects/>}  />
        <Route  path='/Interest' element={<Interest/>} />
        <Route  path='/Contacts' element={<Contact/>} />
        <Route  path='/MainContent' element={<MainContent/>} />
        <Route  exact path='/' element={<MainContent/>} />
        </Routes>
        {/* </Router> */}
      
            
    </React.Fragment>
    );
}
}