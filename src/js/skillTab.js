import React, { Component } from 'react';

class SkillTab extends Component {
    onHoverFunc() {
        this.props.hoverCallback(this.props.skillData["id"]);
    }

    onLeaveFunc() {
        this.props.hoverCallback(null);
    }

    onClickFunc() {
        this.props.updateCallback(this.props.skillData["id"])
    }

    render() {
        let skillData = this.props.skillData;
        let callbackFunc = this.onClickFunc.bind(this);
        let hoverFunc = this.onHoverFunc.bind(this);
        let exitFunc = this.onLeaveFunc.bind(this);

        return <div onMouseEnter={hoverFunc} onMouseLeave={exitFunc} onClick={callbackFunc}>{skillData.name}</div>;
    }
}

export default SkillTab;