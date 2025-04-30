import React from "react";
import logo from "../../assets/logo.jpg";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Header.css";

const Header=()=>{
    return(
     <header>
        <div className="logo">
          <img src={logo} alt="logo"/>  
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>
        <div className="social-icons">
            <a href="" className="youtube">
                <FaYoutube/>
            </a>
            <a href="" className="instagram">
                <FaInstagram/>
            </a>
            <a href="" className="facebook">
                <FaFacebook/>
            </a>
            <a href="" className="linkedin">
                <FaLinkedin/>
            </a>
            

        </div>
        </header>
    );
};
export default Header;