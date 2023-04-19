import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import styles from "../modulecss/Tetris.module.css";
import { usePlayer } from "@/utils/usePlayer";
import { useStage } from "@/utils/useStage";
import { checkColission, createStage } from "@/utils/gameHelpers";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkColission(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //reset
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkColission(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //Game Over 
      if(player.pos.y < 1) {
        console.log("PERDISTE HIJO DE PUTA");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x:0, y: 0, collided:true })
    }
  };

  const dropPlayer = () => {
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
      }
    }
  };

  return (
    <div
      id={styles.main}
      className="w-screen h-screen overflow-hidden"
      /* role="button" */ tabIndex="0"
      onKeyDown={(e) => move(e)}
    >
      <div className="flex items-start p-[40px] ml-[200px] m-0 max-w-[950px] h-[1000px]">
        <Stage stage={stage} />
        <aside className=" w-full max-w-[280px] block p-2">
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
