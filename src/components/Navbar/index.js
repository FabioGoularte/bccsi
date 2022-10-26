import React, { useState } from 'react';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="navbar-container">
            <div id="navbar">
                <header>
                    <h1>Teoria Geral dos Sistemas</h1>
                    <br></br>
                </header>

                <FontAwesomeIcon
                    icon={showLinks ? faTimes : faBars }
                    id="icon"
                    onClick={() => setShowLinks(!showLinks)}
                />

                <nav className="navlinks" id={showLinks ? "hidden" : "" }>
                    <NavLink exact to="/" className="nav-link" onClick={() => setShowLinks(false)}>Home</NavLink>
                    <NavLink to="/about" className="nav-link" onClick={() => setShowLinks(false)}>O que é?</NavLink>
                    <NavLink to="/experiences" className="nav-link" onClick={() => setShowLinks(false)}>Quais são seus <br></br>principios básicos?</NavLink>
                    <NavLink to="/contacts" className="nav-link" onClick={() => setShowLinks(false)}>Conclusão</NavLink>
                </nav>
            </div>
        </div>
    );
}