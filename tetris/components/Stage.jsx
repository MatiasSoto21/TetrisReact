import React from "react";
import Cell from "./Cell";
import styles from "../modulecss/Stage.module.css"
const Stage = ({stage}) => {
    return (
        <div id={styles.main} className="border-2 border-x-amber-950 w-full h-full bg-black">
            {stage.map(row => row.map((cell, x)=> <Cell key={x} type={cell[0]} />))}
        </div>
    )
}

/* grid-template-columns: repeat(6, minmax(0, 1fr))
grid-cols-[200px_minmax(900px,_1fr)_100px]
 */
export default Stage;