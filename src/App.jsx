import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Router>
        <Routes>
        <Route exact path='/MainContent' element={<MainContent/>} />
        <Route  path='/Experience' element={<Experience/>} />
        <Route  path='/Projects' element={<Projects/>}  />
        <Route  path='/Interest' element={<Interest/>} />
        <Route  path='/Contacts' element={<Contact/>} />
        </Routes>
        </Router>
            
    </React.Fragment>
    )
}
}