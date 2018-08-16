import React, { Component } from 'react';

export class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true,
        }
    }

    getSeconds() {
        return ('0' + (this.props.vreme % 60)).slice(-2);
    }

    getMinutes() {
        return ('0' + (Math.floor(this.props.vreme / 60) % 60)).slice(-2);
    }

    getHours() {
        return ('0' + (Math.floor(this.props.vreme / 3600))).slice(-2);
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
            else {
                this.props.stopwatchIncrement(this.props.index);
            }
        }, 1000);
    }

    render() {
        return (
        <td>
            {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </td>
        );
    }
}