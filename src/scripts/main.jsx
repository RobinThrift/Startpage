// src/scripts/main.jsx

import React from 'react';
import Clock from './clock.jsx';
import CmdLine from './cmd-line.jsx';
import LinksBox from './links-box/index.jsx';
import {getRandomBg} from './backgrounds';

class Startpage extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="picture-bg">
                    <img src={getRandomBg()} />
                </div>
                <Clock />
                <CmdLine ps1="λ" />
                <LinksBox />
            </div>
        );
    }
}

React.render(
    <Startpage />,
    document.getElementById('react-render-target1')
);
