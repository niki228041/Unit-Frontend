import React from 'react';
import 'bootstrap';

import "./StylesForUIComponents.css"
import logo from "../Images/UNIT.png";

export const Navbar=()=>{
    return <>
        <header>
        <nav className='upBar'>
            <img src={logo} className="logo"></img>
                <input className='form-control searchBar' placeholder="Search in UNIT"/>
            <p></p>
        </nav>
        </header>
    </>
}
