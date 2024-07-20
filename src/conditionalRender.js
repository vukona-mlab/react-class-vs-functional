import "./App.css";
import React from "react";

class ConditionalRender extends React.Component {
    constructor() {
        super();
        this.state = {
            mounted: 'true'
        };

        // this.increment = this.increment.bind(this);
    }
    // Life Cycles
    // What's happening on the UI
    componentDidMount() {
        console.log('mounted cr');
    }
    componentDidUpdate() {
        console.log('updating cr');
    }
    componentWillUnmount() {
        console.log('unmounting cr');
    }


    render() {
        return (
            <div className="class">
                <p>{this.state.mounted}</p>
            </div>
        );
    }
}

export default ConditionalRender;
