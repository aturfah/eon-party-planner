import React, { Component } from 'react';
import Header from './header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from './sidebar';
import MainPanel from './mainPanel';
import classes from '../data/classes';
import '../css/App.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "classes": ["hero", "hero", "hero", "hero", "hero"],
            "active_panel": 0
        };
        this.images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/))
    }

    change_panel(index) {
        console.log("Changing panel");
        var newState = this.state;
        newState.active_panel = index
        this.setState(newState)
    }

    update_classes(class_name, index) {
        var newState = this.state;
        newState.classes[index] = class_name;
        this.setState(newState);
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row><Header></Header></Row>
                    <Row>
                        <SideBar xs="3" lg="2"></SideBar>
                        <MainPanel xs="9" images={this.images} active_panel={this.state.active_panel} selectable_classes={classes} classes={this.state.classes} change_panel={this.change_panel.bind(this)} update_method={this.update_classes.bind(this)}></MainPanel>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
