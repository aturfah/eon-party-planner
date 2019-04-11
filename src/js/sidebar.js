import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import '../css/sidebar.css';

class SideBar extends Component {
    constructor(props) {
        super(props);

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
        var class_images = []
        var image_urls = this.props.images;
        this.props.classes.forEach(function (val, index) {
            console.log(val, index)
            var image_url = image_urls[val + '.png'];
            class_images.push(<img key={index} src={image_url} alt={"Class"} width="18%" height="100%"></img>)
        });

        return (
            <Col xs={this.xs} sm={this.sm} className="SideBar">
                
                <div className="image-pane">{class_images}</div>
                <br/>
                
                Side-bar Goes Here
            </Col>
        );
    }
}

export default SideBar;
