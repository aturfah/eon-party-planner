import React, { Component } from 'react';
import Header from './header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from './sidebar';
import MainPanel from './mainPanel';
import '../css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "classes": ["hero", "hero", "hero", "hero", "hero"],
            "active_panel": 0
        }
    }

    update_classes(class_name, index) {
        console.log("ME!!", this)
        var new_classes = this.state.classes;
        new_classes[index] = class_name;

        this.setState({
            "classes": new_classes,
            "active_panel": index
        });
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row><Header></Header></Row>
                    <Row>
                        <SideBar xs="3" lg="2"></SideBar>
                        <MainPanel xs="9" active_panel={this.state.active_panel} classes={this.state.classes} update_method={this.update_classes.bind(this)}></MainPanel>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
