import React from "react";
import { TETROMINOS } from "./tetrominos";

const Cell = ({type}) => {
    let color = TETROMINOS["O"].color
    let borderColor = TETROMINOS["O"].border
    /* let back = `bg-orange-300` */

    
    return(
        <div className={color + `  border-2 ${borderColor}`}>
        
        </div>
    )
}

export default Cell