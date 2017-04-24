var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
    getInitialState: function () {
        return {timerStatus: 'stopped', count: 0}
    },
    handleStatusChange: function (status) {
        this.setState({countdownStatus: status});
        console.log(status);
    },
    render: function () {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls
                    countdownStatus={timerStatus}
                    onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;