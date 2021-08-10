import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaCross, FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";
function ReactNavBar() {
    const[showmenu,setshowmenu]=useState(false)
    // console.log(showmenu)
    return (
        <div>
            <div className={showmenu ? 'sildeNav' : 'sildeNav'}>
                <FaCross onClick={()=>setshowmenu(false)}/>
                    <ul>
                        <li>Home</li>
                        <li>Recipe</li>
                        <li>About</li>
                        <li>Tags</li>
                        <li>Contact</li>
                        <li>Search</li>
                    </ul>
                </div>
            <div className="wrapper">
                {/* Left Nav Bar */}
                <ul>
                    <li>
                        <FaBars onClick={()=>setshowmenu(true)}/>
                    </li>
                </ul>

                

                {/* Logo Section */}
                <div className="logo">Logo</div>
                {/* Menu Section */}
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Recipe</li>
                        <li>About</li>
                        <li>Tags</li>
                        <li>Contact</li>
                        <li>Search</li>
                    </ul>
                </div>
                     {/* Menu -Icons Section */}
                <div className="menu-icons">
                    <ul>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaTwitch />
                        </li>
                    </ul>
                </div>

                <div className="Baricon">
                    <ul>
                        <li>
                            <FaBars onClick={()=>setshowmenu(!showmenu)} />
                        </li>
                    </ul>
                </div>
            </div>
            {/* Responsive Menu Section */}
            <div className={showmenu ? 'nav-bar-show ':'nav-bar '}>
               
                <ul>
                    <li>Home</li>
                    <li>Recipe</li>
                    <li>About</li>
                    <li>Tags</li>
                    <li>Contact</li>
                    <li>Search</li>
                </ul>
            </div>
            
            <div>
                <h1>Responsive Nav BAr</h1>
            </div>
        </div>
    );
}

export default ReactNavBar;
