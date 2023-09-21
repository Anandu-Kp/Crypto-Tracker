import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {

    return (
        <div className="footer">

            <div className="social-links">
                <a href="https://facebook.com">
                    <FacebookIcon className="social-link" />
                </a>
                <a href="mailto:avivashishta@gmail.com">
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