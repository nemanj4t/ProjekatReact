import React, { Component } from 'react';

export class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            paused: true
        }
    }

    getSeconds() {
        return ('0' + (this.state.seconds % 60)).slice(-2);
    }

    getMinutes() {
        return ('0' + (Math.floor(this.state.seconds / 60) % 60)).slice(-2);
    }

    getHours() {
        return ('0' + (Math.floor(this.state.seconds / 3600))).slice(-2);
    }

    stopwatchLogic() {
        this.setState({
            ...this.state,
            paused: !this.state.paused
        });

        const stopwatch = setInterval(() => {
            if (this.state.paused) {
                clearInterval(stopwatch)
            }

            this.setState({
                ...this.state,
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }
    
    render() {
        return (
        <div>
            {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </div>
        );
    }
}