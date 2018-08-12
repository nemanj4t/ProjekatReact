import React, { Component } from 'react';

export class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            paused: false
        }
    }
    incrementSecond() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                seconds: this.state.seconds + 1
            });
        },1000);
    }
    pauseHandle() {
        this.setState({
            ...this.state,
            paused: !this.state.paused
        });
        /*while(!this.state.paused) {
            this.incrementSecond();
        }*/
    }
    render() {
        return (
        <div>
            <button onClick={() => this.incrementSecond()}>go</button>
            {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </div>
        );
    }
}