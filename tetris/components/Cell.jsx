import React from "react";
import { TETROMINOS } from "./tetrominos";

const Cell = ({type}) => {
    let color = TETROMINOS[type].color
    let borderColor = TETROMINOS[type].border

    
    return(
        <div className={color + `  border-2 ${borderColor}`}>
        
        </div>
    )
}

export default Cell