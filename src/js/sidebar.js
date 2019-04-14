import React, {Component} from 'react';
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
    const class_images = [];
    const image_urls = this.props.images;
    this.props.classes.forEach(function(val, index) {
      const image_url = image_urls[val + '.png'];
      class_images.push(<img key={index} src={image_url} alt={'Class'} width="20%" height="auto"></img>);
    });

    return (
      <Col xs={this.xs} sm={this.sm} className="SideBar">

        <div className="image-pane">
          <h3>Party Overview</h3>
          {class_images}
        </div>
        <br/>

      </Col>
    );
  }
}

export default SideBar;
