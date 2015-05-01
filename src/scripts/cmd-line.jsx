// src/scripts/cmd-line.jsx 

import React from 'react';
import execCmd from './commands';

class CmdLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    _handleChange(event) {
        this.setState({value: event.target.value});
    }

    _execCmd(event) {
        if (event.key === 'Enter') {
            let returnValue = execCmd(this.state.value);
            if (returnValue) {
                this.setState({value: returnValue});
            } 
        }
    }

    render() {
        var val = this.state.value;
        return (
            <div className="cmd-line">
                <div className="ps1">{this.props.ps1}</div>
                <input type="text" value={val} onChange={this._handleChange.bind(this)} onKeyPress={this._execCmd.bind(this)} />
            </div>
        );
    }
}
CmdLine.propTypes = {ps1: React.PropTypes.string}
CmdLine.defaultProps = {ps1: 'λ'};

export default CmdLine;
