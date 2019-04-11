import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Etrian Odyssey Nexus Party Planner</h1>
                <h5><a href="https://github.com/aturfah/eon-party-planner">Github <i class="fab fa-github"></i></a></h5>
            </div>
        );
    }
}

export default Header;
