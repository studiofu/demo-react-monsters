import React, {Component} from 'react';

class StateComponent extends Component {
    
    render() {
        var inputValue = this.props.inputValue;
        if(inputValue === 1) {
            return (
                <div>
                    this is state component 111
                </div>
            )
        }else {
            return (
                <div>
                    this is state component NOT 111
                </div>
            )
        }

    }
}

export default StateComponent;