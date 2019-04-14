import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Little button thing for a skill
 */
class SkillTab extends Component {
  /**
   * Updates skill when mouse hovers
   */
  onHoverFunc() {
    const skillInfo = this.props.skillData;
    this.props.hoverCallback(skillInfo['id']);
  }

  /**
   * Updates skill when mouse leaves
   */
  onLeaveFunc() {
    this.props.hoverCallback(null);
  }

  /**
   * Activates skill on click
   */
  onClickFunc() {
    const skillInfo = this.props.skillData;
    this.props.updateCallback(skillInfo['id']);
  }

  /**
   * Renders this React class
   * @return {div} Rendered app
   */
  render() {
    const skillData = this.props.skillData;
    const callbackFunc = this.onClickFunc.bind(this);
    const hoverFunc = this.onHoverFunc.bind(this);
    const exitFunc = this.onLeaveFunc.bind(this);
    let formattedName = skillData.name;
    if (this.props.active === true) {
      formattedName = formattedName + ' ACTIVE';
    }

    return (
      <div
        onMouseEnter={hoverFunc}
        onMouseLeave={exitFunc}
        onClick={callbackFunc}>
        {formattedName}
      </div>
    );
  }
}

SkillTab.propTypes = {
  skillData: PropTypes.object,
  hoverCallback: PropTypes.func,
  updateCallback: PropTypes.func,
  active: PropTypes.bool,
};
export default SkillTab;
