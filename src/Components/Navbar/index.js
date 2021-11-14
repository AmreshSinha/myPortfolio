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
                <a href="#resume">résumé</a>
                <a href="https://links.apsweb.design" target="_blank">links</a>
            </div>
        </header>
    );
};

export default Navbar;
