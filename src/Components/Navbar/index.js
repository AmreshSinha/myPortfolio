import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navmenu-wrapper">
            <div className="navmenu">
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/showcase">showcase</Link>
                <Link to="/skills">skills</Link>
                {/* <a href="/experience">experience</a> */}
                <a href="#resume">resume</a>
                <a href="https://github.com/AmreshSinha">github</a>
                <a href="https://linkedin.com/in/aps-amresh">linkedin</a>
            </div>
        </header>
    );
};

export default Navbar;
