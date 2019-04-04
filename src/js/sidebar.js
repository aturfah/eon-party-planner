import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

class SideBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        if (this.props.xs === undefined) {
            this.xs = 3;
        } else {
            this.xs = this.props.xs;
        }
        if (this.props.sm === undefined) {
            this.sm = 3;
        } else {
            this.sm = this.props.sm;
        }
        if (this.props.lg === undefined) {
            this.lg = 2;
        } else {
            this.lg = this.props.lg;
        }
    }

    render() {
        return (
            <Col xs={this.xs} sm={this.sm} className="SideBar">
                Side-bar Goes Here
            </Col>
        );
    }
}

export default SideBar;
