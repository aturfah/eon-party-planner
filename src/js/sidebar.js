import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import '../css/sidebar.css';

/**
 * Side Bar to display aggregated info
 */
class SideBar extends Component {
  /**
   * Constructor
   * @param {object} props Object properties
   */
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

  /**
   * Renders this React class
   * @return {div} Rendered app
   */
  render() {
    const classImages = [];
    const imageUrls = this.props.images;
    const classesData = this.props.classes;
    classesData.forEach(function(val, index) {
      const imageUrl = imageUrls[val + '.png'];
      classImages.push(
          <img
            key={index}
            src={imageUrl}
            alt={'Class'}
            width="20%"
            height="auto">
          </img>
      );
    });

    return (
      <Col xs={this.xs} sm={this.sm} className="SideBar">

        <div className="image-pane">
          <h3>Party Overview</h3>
          {classImages}
        </div>
        <br/>

      </Col>
    );
  }
}

SideBar.propTypes = {
  xs: PropTypes.string,
  sm: PropTypes.string,
  lg: PropTypes.string,
  images: PropTypes.object,
  classes: PropTypes.array,
};
export default SideBar;
