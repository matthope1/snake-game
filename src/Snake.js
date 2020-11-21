import React , { Component } from 'react';

class Snake extends Component {
    constructor() {
        super();
        this.state = {
            position: [[0,0],[0,1]],
            length: 1,
        }
    }

    getStyle(coordinate) {
        const style =  {
            top: coordinate[0] * 2 + "%",
            left: coordinate[1] * 2 + "%"
        }
        return style;
    }
    
    render() {
        const snakeSquares = this.state.position.map((coordinate) =>
            <p className="snake-square" style={this.getStyle(coordinate)}></p>
        )

        return(
            <div>
                {snakeSquares}
            </div>
        )
    }
}

export default Snake;