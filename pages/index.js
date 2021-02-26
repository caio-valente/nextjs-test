import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image'
import Head from 'next/head'

const ImgComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={400} // Desired size with correct aspect ratio
    width={400} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

function Home () {
  return <div>
    <Head>
      <title>Next.js App</title>
    </Head>
    <div>
      <h1>Home!</h1>
      <div><ImgComponent/></div>
      <h2>Testing 2</h2>
      <Game/>
    </div>
    <div>
      <p>Testando uma página...123</p>
      <Link  href = '/about'>
        <a>Sobre...</a>
      </Link>
      <div>
        <ImgComponent/>
      </div>
    </div>
  </div>
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      player: 'X',
      stepNumber: 0,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      player: ((step % 2) === 0) ? 'X':'O',
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.player;
    this.setState({
      stepNumber: history.length,
      player: this.state.player=='X' ? 'O':'X',
      history: history.concat([{
        squares: squares,
      }]),
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.player);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares [a];
    }
  }
  return null;
}

export default Home
