'use client'

import Image from "next/image";

import { useState } from 'react';

type SquareState = null | 'X' | 'O';

function Square({ value, onSquareClick }) {
  return <
    button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
}

export default function Board() {
  const [squares, setSquares] = useState<SquareState[]>(Array(9).fill(null));
  const [isXNext, setNextPlayer] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const nextSquares = squares.slice();
    if (nextSquares[i]) {
      return;
    }
    if (isXNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setNextPlayer(!isXNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export function Home() {
  return (
    "Hello wolrd"
  )
}
