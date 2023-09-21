import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import iphone from "../../../Assets/iphone.png"
import gradient from "../../../Assets/gradient.png"

import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";


function MainComponent() {

    return (
        <div className="main-flex">
            <div className="left-flex">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    className="top-heading">Track Crypto
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: .5 }}
                    className="bottom-heading">Real Time.</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: 1 }}
                    className="main-flex-para">Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5, delay: 1.5 }}
                    className="btn-flex">
                    <Link className="link" to="/dashboard">
                        <Button text={"Dashborad"} outlined={false} onClick={(e) => console.log("button clicked")} />
                    </Link>
                    <RWebShare
                        data={{
                            text: "Crypto Dashboard made using React JS.",
                            url: "https://crypto-dashboard-dec.netlify.app/",
                            title: "CryptoDashboard.",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <Button text="Share App" outlined={true} />
                    </RWebShare>
                </motion.div>
            </div>
            <div className="right-flex">
                <motion.img
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{ type: "smooth", repeatType: "mirror", duration: 2, repeat: "infinity" }}

                    className="iphone" src={iphone} />
                <img className="gradient" src={gradient} />
            </div>
        </div>
    )
}

export default MainComponent;
