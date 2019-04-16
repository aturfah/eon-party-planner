import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import '../css/sidebar.css';

/**
 * Creates headers for tabs
 * @param {Array} headers Panel titles
 * @param {Func} clickCallback Callback function on click
 * @return {Array} Array of panel headers
 */
function createTabs(headers, clickCallback) {
  const results = [];
  headers.forEach(function(header, index) {
    const headerTab = (
      <Col key={index} className="sidebar-tab-label"
        onClick={() => clickCallback(index)}>
        {header}
      </Col>
    );
    results.push(headerTab);
  });

  return results;
}

/**
 * Table that renders with relevant skill data
 */
class SkillDataTable extends Component {
  /**
   * Initializes SkillDataTable
   * @param {Object} props Properties of object
   */
  constructor(props) {
    super(props);

    this.headers = ['Damage', 'DPS Support',
      'Damage Mitigation', 'Healing',
      'Lockdown'];
    this.state = {
      activePanel: 0,
    };
  }

  /**
   * Sets the tab to be displayed
   * @param {Int} index Index in headers of panel
   */
  changeTab(index) {
    const newState = this.state;
    newState.activePanel = index;
    this.setState(newState);
  }

  /**
   * Renders this React class
   * @return {div} Rendered app
   */
  render() {
    const tabs = createTabs(this.headers, this.changeTab.bind(this));

    return (
      <div>
        <Row>{tabs}</Row>
        <Row>
        This is where tables go...
        </Row>
      </div>
    );
  }
}


SkillDataTable.propTypes = {
  skill_data: PropTypes.object,
  chosen_skills: PropTypes.array,
};

export default SkillDataTable;
