import React from "react";
import "./style.css"
import TemporaryDrawer from "./Drawer"
import Button from "../Button";
import { Link } from "react-router-dom"


function Header() {

    return (
        <div className="navbar">
            <Link to="/"><h1 className="logo">Crypto Tracker<span>.</span></h1></Link>
            <div className="links">
                <Link className="link" to="/"><p>Home</p></Link>
                <Link className="link" to="/compare"><p>Compare</p></Link>
                <Link className="link" to="/dashboard">
                    <Button text={"Dashborad"} outlined={false} onClick={(e) => console.log("button clicked")} />
                </Link>
            </div>
            <div className="drawer-container">
                <TemporaryDrawer />
            </div>

        </div>
    )
}

export default Header;