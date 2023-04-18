import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import styles from "../modulecss/Tetris.module.css";
import { usePlayer } from "@/utils/usePlayer";
import { useStage } from "@/utils/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");

  return (
    <div id={styles.main} className="w-screen h-screen overflow-hidden">
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
          <StartButton />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
