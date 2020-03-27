import React, {Component} from 'react';

import Heading from './Heading';

class ChangeColors extends Component {

    constructor() {
        super();
        this.state = {
            color: 'red'
        }
    }

    changeColor = colorValue => {
        this.setState({color: colorValue});
    }

    render() {
        return(
            <div className="change-color">
                <Heading colorName={this.state.color} />
                <button onClick={()=>this.changeColor('red')}>Red</button>
                <button onClick={()=>this.changeColor('green')} >Green</button>
                <button onClick={()=>this.changeColor('blue')}>Blue</button>
            </div>
        );
    }

}

export default ChangeColors;