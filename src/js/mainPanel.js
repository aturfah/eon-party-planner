import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SubPanel from './subPanel';
import PanelTab from './panelTab';
import PropTypes from 'prop-types';

/**
 * Window with class selection
 */
class MainPanel extends Component {
  /**
   * Renders this React class
   * @return {div} Rendered app
   */
  render() {
    const activePanel = this.props.active_panel;
    const updateMethod = this.props.update_method;
    const updateSkills = this.props.update_skills;
    const changePanel = this.props.change_panel;
    const images = this.props.images;
    const selectableClasses = this.props.selectable_classes;
    const allClasses = this.props.classes;
    const allSkills = this.props.skills_data;
    const subPanels = [];
    const panelTabs = [];
    allClasses.forEach(function(val, index) {
      let isActivePanel = false;
      if (activePanel === index) {
        isActivePanel = true;
      }
      subPanels.push(
        <SubPanel
          key={index}
          chosen_class={val}
          all_skills={allSkills}
          images={images}
          visible={isActivePanel}
          selectable_classes={selectableClasses}
          index={index}
          update_method={updateMethod}
          update_skills={updateSkills}>
        </SubPanel>
      );
      panelTabs.push(
          <PanelTab
            key={index}
            chosen_class={val}
            change_panel={changePanel}
            selectable_classes={selectableClasses}
            visible={isActivePanel}
            index={index}>
          </PanelTab>
      );
    });

    return (
      <Col className="MainPanel">
        <Row>{panelTabs}</Row>
        {subPanels}
      </Col>
    );
  }
}

MainPanel.propTypes = {
  active_panel: PropTypes.number,
  update_skills: PropTypes.func,
  update_method: PropTypes.func,
  change_panel: PropTypes.func,
  images: PropTypes.object,
  selectable_classes: PropTypes.object,
  classes: PropTypes.array,
  skills_data: PropTypes.object,
};


export default MainPanel;
