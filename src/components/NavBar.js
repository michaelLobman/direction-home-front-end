import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    const linkDiv = {
        textAlign: "center",
    }

    const linkStyle ={
        padding: "10px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "1.8vw",
        color: "#FFF5EF"
    }

    const activeStyle = { 
        background: "#FFF5EF",
        color: "hsl(344, 38%, 38%)"
    }

    return (
    <div style={linkDiv}>
        <h1><span style={{ textDecoration: "line-through"}}>No</span> Direction Home</h1>
        <NavLink
            to="/"
            exact
            style={linkStyle}
            activeStyle={activeStyle}
        >
            Home
        </NavLink>
        <NavLink
            to="/rank-songs"
            exact
            style={linkStyle}
            activeStyle={activeStyle}
        >
            Rank Songs 
        </NavLink>
        <NavLink 
            to="/live"
            exact
            style={linkStyle}
            activeStyle={activeStyle}
        >
            Live
        </NavLink>
        <NavLink
            to="/moments"
            exact
            style={linkStyle}
            activeStyle={activeStyle}
        >
            Moments
        </NavLink>

    </div>
    )

}

export default NavBar;