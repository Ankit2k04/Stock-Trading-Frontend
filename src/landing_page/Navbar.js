import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
            <div className="container p-2">
                <NavLink className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-lg-0">

                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        "nav-link" + (isActive ? " active text-primary fw-bold" : "")
                                    } 
                                    to="/signup"
                                >
                                    Signup
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        "nav-link" + (isActive ? " active text-primary fw-bold" : "")
                                    } 
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        "nav-link" + (isActive ? " active text-primary fw-bold" : "")
                                    } 
                                    to="/product"
                                >
                                    Product
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        "nav-link" + (isActive ? " active text-primary fw-bold" : "")
                                    } 
                                    to="/pricing"
                                >
                                    Pricing
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => 
                                        "nav-link" + (isActive ? " active text-primary fw-bold" : "")
                                    } 
                                    to="/support"
                                >
                                    Support
                                </NavLink>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
