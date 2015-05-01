// src/scripts/clock.jsx 

import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    }

    render() {
        var time  = this.state.time,
            hours = time.getHours().toString(),
            mins  = time.getMinutes().toString();

        if (hours.length === 1) { hours = '0' + hours; }
        if (mins.length === 1) { mins = '0' + mins; }

        return <time className="clock">{hours}:{mins}</time>;
    }

    componentDidMount() {
        this._tick();
    }

    _tick() {
        setTimeout(() => {
            this.setState({time: new Date()});
            this._tick();
        }, 30*1000);
    }
}

export default Clock;
