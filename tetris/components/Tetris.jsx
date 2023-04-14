import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "@/utils/gameHelpers";
import styles from "../modulecss/Tetris.module.css"
import bgImage from "../public/img/bg.png";

const Tetris = () => {
  return (
    <div id={styles.main} className="w-screen h-screen overflow-hidden">
      <div className="flex items-start p-[40px] ml-[200px] m-0 max-w-[900px] h-[1000px]">
        <Stage stage={createStage()} />
        <aside className=" w-full max-w-[200px] block p-2">
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
