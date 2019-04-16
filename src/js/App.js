import React, {Component} from 'react';
import Header from './header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from './sidebar';
import MainPanel from './mainPanel';
import classes from '../data/classes';
import skills from '../data/skills';
import '../css/App.css';

/**
 * Imports all URLs in a directory
 * @param {string} r Directory to look in
 * @return {Object} Map from filename to URL
 */
function importAll(r) {
  const images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

/**
 * Main application window
 */
class App extends Component {
  /**
   * Initializes App
   * @param {Object} props Properties of object
   */
  constructor(props) {
    super(props);
    this.state = {
      'classes': ['hero', 'landschnekht', 'harbinger', 'gunner', 'sovereign'],
      'active_panel': 0,
      'skills': [
        [],
        [],
        [],
        [],
        [],
      ],
    };
    this.images = importAll(require.context('../img',
        false,
        /\.(png|jpe?g|svg)$/));
  }

  /**
   * Changes active panel
   * @param {Integer} index Index of panel to switch to
   */
  changePanel(index) {
    console.log('Changing panel');
    const newState = this.state;
    newState.active_panel = index;
    this.setState(newState);
  }

  /**
   * Changes class of specific panel
   * @param {String} className Class ID to switch to
   * @param {Integer} index Index of panel to switch to
   */
  updateClasses(className, index) {
    const newState = this.state;
    newState.classes[index] = className;
    newState.skills[index] = [];
    this.setState(newState);
  }

  /**
   * Updates skills of specific class
   * @param {Array} skillList List of new skills
   * @param {Integer} index Index of panel to switch to
   */
  updateSkills(skillList, index) {
    console.log('Updating Skills for panel #', index);
    const newState = this.state;
    newState.skills[index] = skillList;
    console.log(newState.skills);
    this.setState(newState);
  }

  /**
   * Renders this React class
   * @return {div} Rendered app
   */
  render() {
    return (
      <div className="App h-100">
        <Container fluid={true} className="h-100">
          <Row className='HeaderRow'><Header></Header></Row>
          <Row className="BodyRow h-100">
            <SideBar xs="4"
              classes={this.state.classes}
              images={this.images}
              skill_data={skills}
              chosen_skills={this.state.skills}>
            </SideBar>

            <MainPanel xs="8"
              images={this.images}
              active_panel={this.state.active_panel}
              selectable_classes={classes}
              skills_data={skills}
              chosen_skills={this.state.skills}
              update_skills={this.updateSkills.bind(this)}
              classes={this.state.classes}
              change_panel={this.changePanel.bind(this)}
              update_method={this.updateClasses.bind(this)}>
            </MainPanel>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
