import React from 'react';
import Snake from './Snake';
import Food from './Food';

function getRandomCoordinates() {
    const min = 0;
    const max = 96;

    let x = Math.floor(Math.random() * (max - min) + min);
    let y = Math.floor(Math.random() * (max - min) + min);
    return [x, y]
}

class GameArea extends React.Component {
    state = {
        food: getRandomCoordinates(),
        snakeDots: [
            [0, 0],
            [4, 0],
            [8, 0],
            [12, 0]
        ]
    }

    render() {
        return (
            <div className="game-area">
                <Snake snakeDots={this.state.snakeDots}></Snake>
                <Food dot={this.state.food}></Food>
            </div>
        );
    }
}

export default GameArea;