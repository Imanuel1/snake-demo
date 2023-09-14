import React, { useState, useEffect } from "react";
import { Controller } from "./Controller";
import "./SnakeGame.css";

const CELL_SIZE = 30;
let ROWS = Math.floor((window.innerHeight - 5) / CELL_SIZE); // 24;
let COLS = Math.floor((window.innerWidth - 5) / CELL_SIZE); //50;
const randomPosition = () => {
  return {
    row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),
  };
};

function SnakeGame({ handleOnfailed }) {
  const [snake, setSnake] = useState([
    { row: 5, col: 5 },
    { row: 5, col: 4 }, // Initial snake length (2 segments)
  ]);
  const [food, setFood] = useState(randomPosition());
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const handleResizeScreen = () => {
      ROWS = Math.floor((window.innerHeight - 5) / CELL_SIZE);
      COLS = Math.floor((window.innerWidth - 5) / CELL_SIZE);;
      // Use screenHeight and screenWidth as needed
    }
    document.addEventListener("keydown", handleKeyPress);
    window.addEventListener("resize", handleResizeScreen);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("resize", handleResizeScreen);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);

    return () => {
      clearInterval(interval);
    };
  }, [snake, food]);

  const moveSnake = () => {
    const head = { ...snake[0] };
    console.log("snake :", snake[0], snake[1]);
    console.log("direction :", direction);
    switch (direction) {
      case "up":
        head.row = head.row ? head.row - 1 : 24;
        break;
      case "down":
        head.row = head.row === 24 ? 0 : head.row + 1;
        break;
      case "left":
        head.col = head.col ? head.col - 1 : 50;
        break;
      case "right":
        head.col = head.col === 50 ? 0 : head.col + 1;
        break;
      default:
        break;
    }

    snake.map((part) => {
      if (part.col === head.col && part.row === head.row) {
        handleOnfailed(snake.length - 2);
      }
    });

    const newSnake = [head, ...snake];
    if (head.row === food.row && head.col === food.col) {
      setSnake(newSnake);
      setFood(randomPosition());
    } else {
      newSnake.pop();
      setSnake(newSnake);
    }
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setDirection((prev) => (prev === "down" ? prev : "up"));
        break;
      case "ArrowDown":
        setDirection((prev) => (prev === "up" ? prev : "down"));
        break;
      case "ArrowLeft":
        setDirection((prev) => (prev === "right" ? prev : "left"));
        break;
      case "ArrowRight":
        setDirection((prev) => (prev === "left" ? prev : "right"));
        break;
      default:
        break;
    }
  };

  const renderCell = (row, col) => {
    const isSnake = snake.some(
      (segment) => segment.row === row && segment.col === col
    );
    const isFood = food.row === row && food.col === col;

    return (
      <div
        key={`${row}-${col}`}
        className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
      ></div>
    );
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        board.push(renderCell(row, col));
      }
    }
    return board;
  };

  return (
    <>
      <div
        className="snake-game"
        // tabIndex="0"
        // onKeyDown={handleKeyPress}
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
          gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
        }}
      >
        {renderBoard()}
      </div>
      <Controller setDirection={handleKeyPress} />
    </>
  );
}

export default SnakeGame;
