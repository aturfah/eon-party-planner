import React, { Component } from 'react';

import SubPanel from './subPanel'

class MainPanel extends Component {
    render() {
        return (
            <div className="MainPanel">
                MainPanel Goes Here
                <SubPanel visible={true}></SubPanel>
                <SubPanel visible={false}></SubPanel>
                <SubPanel visible={false}></SubPanel>
                <SubPanel visible={false}></SubPanel>
                <SubPanel visible={false}></SubPanel>
            </div>
        );
    }
}

export default MainPanel;
