import React, {Component} from 'react';

class Try extends Component{
    render() {
        return(
            <li>
                <div>{this.props.try.try}</div>
                <div>{this.props.try.result}</div>
            </li>
        )
    }
}

export default Try;