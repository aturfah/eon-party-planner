import React, {Component} from 'react';

class SkillTab extends Component {
  onHoverFunc() {
    const skillInfo = this.props.skillData;
    this.props.hoverCallback(skillInfo['id']);
  }

  onLeaveFunc() {
    this.props.hoverCallback(null);
  }

  onClickFunc() {
    const skillInfo = this.props.skillData;
    this.props.updateCallback(skillInfo['id']);
  }

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

export default SkillTab;
