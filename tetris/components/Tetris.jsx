import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import styles from "../modulecss/Tetris.module.css";
import { useInterval } from "./useInterval";
import { usePlayer } from "./usePlayer";
import { useStage } from "./useStage";
import { useGameStatus } from "./useGameStatus";
import { checkColission, createStage } from "./gameHelpers";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

 

  const movePlayer = (dir) => {
    if (!checkColission(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //reset
    setStage(createStage());
    setDropTime(700);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    //increase level + 10 rows cleared

    if(rows > (level + 1) * 10) {
       setLevel(prev => prev + 1);
       //also increase speed
       setDropTime(700 / (level +1) + 200);
    }

    if (!checkColission(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //Game Over 
      if(player.pos.y < 1) {

        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x:0, y: 0, collided:true })
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(700 / (level +1) + 200);
      }
    }
  }

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime)

  return (
    <div
      id={styles.main}
      className="w-screen h-screen overflow-hidden"
      /* role="button" */ tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <div className="flex items-start p-[40px] ml-[200px] m-0 max-w-[950px] h-[1000px]">
        <Stage stage={stage} />
        <aside className=" w-full max-w-[280px] block p-2">
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
