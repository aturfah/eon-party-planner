import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import SkillDataTable from './skillDataTable';
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
      this.sm = this.xs;
    } else {
      this.sm = this.props.sm;
    }
    if (this.props.lg === undefined) {
      this.lg = this.sm;
    } else {
      this.lg = this.props.lg;
    }

    console.log(this.props.skill_data);
    console.log(this.props.chosen_skills);
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
            height="auto"
            max-height="100%">
          </img>
      );
    });

    return (
      <Col xs={this.xs} sm={this.sm} className="SideBar">

        <Row className="image-pane">
          <h2>Party Overview</h2>
          {classImages}
        </Row>
        <SkillDataTable
          chosen_skills={this.props.chosen_skills}
          skill_data={this.props.skill_data}
        >
        </SkillDataTable>

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
  skill_data: PropTypes.object,
  chosen_skills: PropTypes.array,
};
export default SideBar;
