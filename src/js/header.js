import React, {Component} from 'react';
import '../css/header.css';

/**
 * Top header for application window
 */
class Header extends Component {
  /**
   * Renders this React class
   * @return {div} Rendered Header window
   */
  render() {
    return (
      <div className="Header">
        <h1>Etrian Odyssey Nexus Party Planner</h1>
        <h5>
          <a href="https://github.com/aturfah/eon-party-planner">
            Github <i className="fab fa-github"></i>
          </a>
        </h5>
      </div>
    );
  }
}

export default Header;
