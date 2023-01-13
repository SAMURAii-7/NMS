import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const NavBar = () => {
    let cookies = new Cookies();

    const handleLogout = () => {
        cookies.remove("auth-token");
    };

    return (
        <nav className="dashboardHeader">
            <Link className="siteName" to="/">
                NMS
            </Link>
            <ul>
                <li>
                    <Link className="link" to="/add-controller">
                        ADD
                    </Link>
                </li>
                <li>
                    <Link className="link" onClick={handleLogout} to="/">
                        LOGOUT
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
