import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Switch} from 'react-router';
import {NavBar} from "./NavBar";
import MainContent from "./MainContent";
import Photo from "./Photo";
import Experience from "./Experience";
import Projects from "./Projects";
import Interest from "./Interest";
import Contact from "./Contact";

export default class App extends Component
{
render(){
    return (
    <React.Fragment>
        <NavBar/>
        <Photo/>        
        <Router basename={process.env.PUBLIC_URL}>
        <Routes>        
        <Route  path='/Experience' element={<Experience/>} />
        <Route  path='/Projects' element={<Projects/>}  />
        <Route  path='/Interest' element={<Interest/>} />
        <Route  path='/Contacts' element={<Contact/>} />
        <Route  path='/' element={<MainContent/>} />
        </Routes>
        </Router>
            
    </React.Fragment>
    )
}
}