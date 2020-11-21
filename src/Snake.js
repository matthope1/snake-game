import React , { Component } from 'react';

class Snake extends Component {
    constructor() {
        super();
        this.state = {
            position: [[0,0],[0,1]],
            length: 1,
        }
    }
    
    render() {
        const snakeSquares = this.state.position.map((coordinate) =>
            <p className="snake-square">{coordinate}</p>
        )

        return(
            <div>
                {snakeSquares}
            </div>
        )
    }
}

export default Snake;