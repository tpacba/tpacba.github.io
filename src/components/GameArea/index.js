import React from 'react';
import Snake from './Snake';
import Food from './Food';
import StartButton from './StartButton';
import Walls from './Walls';

function getRandomCoordinates() {
    const min = 0;
    const max = 49;

    let x = Math.floor(Math.random() * (max - min) + min) * 2;
    let y = Math.floor(Math.random() * (max - min) + min) * 2;
    return [x, y]
}

const startState = {
    start: false,
    food: getRandomCoordinates(),
    direction: 'right',
    speed: 100,
    snakeDots: [
        [0, 0],
        [2, 0],
        [4, 0]
    ]
}

class GameArea extends React.Component {
    state = startState;

    componentDidMount() {
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate() {
        this.outOfBorders();
        this.collapseSelf();
        this.eatFood();
    }

    startGame = (event) => {
        event.preventDefault();
        this.setState({ start: true })
        setInterval(this.moveSnake, this.state.speed)
    }

    onKeyDown = (event) => {
        event = event || window.event;
        event.preventDefault();
        if (this.state.direction === 'left') {
            switch (event.keyCode) {
                case 38:
                    this.setState({ direction: 'down' })
                    break;
                case 40:
                    this.setState({ direction: 'up' })
                    break;
                default:
                    console.log(this.state.direction)
                    break;
            }
        } else if (this.state.direction === 'up') {
            switch (event.keyCode) {
                case 37:
                    this.setState({ direction: 'left' })
                    break;
                case 39:
                    this.setState({ direction: 'right' })
                    break;
                default:
                    console.log(this.state.direction)
                    break;
            }
        } else if (this.state.direction === 'right') {
            switch (event.keyCode) {
                case 38:
                    this.setState({ direction: 'down' })
                    break;
                case 40:
                    this.setState({ direction: 'up' })
                    break;
                default:
                    console.log(this.state.direction)
                    break;
            }
        } else if (this.state.direction === 'down') {
            switch (event.keyCode) {
                case 37:
                    this.setState({ direction: 'left' })
                    break;
                case 39:
                    this.setState({ direction: 'right' })
                    break;
                default:
                    console.log(this.state.direction)
                    break;
            }
        }
    }

    moveSnake = () => {
        if(this.state.start) {
            let dots = [...this.state.snakeDots]
            let head = dots[dots.length - 1]
    
            switch (this.state.direction) {
                case 'left':
                    head = [head[0] - 2, head[1]];
                    break;
                case 'up':
                    head = [head[0], head[1] + 2];
                    break;
                case 'right':
                    head = [head[0] + 2, head[1]];
                    break;
                case 'down':
                    head = [head[0], head[1] - 2];
                    break;
                default:
                    console.log(this.state.direction);
                    break;
            }
            dots.push(head);
            dots.shift();
            this.setState({ snakeDots: dots })
        }
    }

    outOfBorders = () => {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1]
        //right,bottom,left,top
        if (head[1] >= 100) {
            this.gameOver()
        } else if (head[0] >= 100) {
            alert("Redirecting to Portfolio");
            this.setState(startState);
            window.location.href = "/portfolio"
        } else if (head[0] < 0) {
            alert("Redirecting to Connect");
            this.setState(startState);
            window.location.href = "/connect"
        } else if (head[1] < 0) {
            alert("Redirecting to About");
            this.setState(startState);
            window.location.href = "/about"
        }
    }

    collapseSelf = () => {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                this.gameOver();
            }
        })
    }

    gameOver = () => {
        alert("Game Over");
        this.setState(startState);
        window.location.reload(false);
    }

    eatFood = () => {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        let food = this.state.food;
        if (head[0] === food[0] && head[1] === food[1]) {
            this.setState({ food: getRandomCoordinates() })
            this.longerSnake();
            this.increaseSpeed();
        }
    }

    increaseSpeed = () => {
        this.setState({ speed: this.state.speed + 10 })
    }

    longerSnake = () => {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([]);
        this.setState({ snakeDots: newSnake })
    }

    render() {
        console.log(this.state.direction)
        return (
            <div className="game-area">
                {(!this.state.start && <StartButton startGame={this.startGame}></StartButton>)}
                {(this.state.start && <Walls></Walls>)}
                <Snake snakeDots={this.state.snakeDots}></Snake>
                <Food dot={this.state.food}></Food>
            </div>
        );
    }
}

export default GameArea;