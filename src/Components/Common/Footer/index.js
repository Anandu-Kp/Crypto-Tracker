import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom"

function Footer() {

    return (
        <div className="footer">
            <Link to="/"><h1 className="logo">Crypto Tracker<span>.</span></h1></Link>

            <div className="social-links">
                <a href="https://facebook.com">
                    <FacebookIcon className="social-link" />
                </a>
                <a href="mailto:anandukp06@gmail.com">
                    <EmailIcon className="social-link" />
                </a>
                <a href="https://www.twitter.com">
                    <TwitterIcon className="social-link" />
                </a>
                <a href="https://www.instagram.com">
                    <InstagramIcon className="social-link" />
                </a>
            </div>
        </div>
    );
}

export default Footer;