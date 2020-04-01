import React from 'react'
import { NavLink, Link } from 'react-router-dom';


export default function Nav(props) {
    return (
        <div className={props.class}>
            <Link to="/"><h2>Logo</h2></Link>
            <div className="nav-menu">
                    <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">Home</NavLink>

                    <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/Services">Services</NavLink>
        
                    <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/Industries">Industries</NavLink>
        
                    <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/About">About</NavLink>

                    <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/Contact">Contact</NavLink>
                    
            </div>
        </div>
    )
}
