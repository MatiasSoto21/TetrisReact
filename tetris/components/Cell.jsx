import React from "react";
import { TETROMINOS } from "./tetrominos";

const Cell = ({type}) => {
    let color = TETROMINOS["Z"].color
    let borderColor = TETROMINOS["Z"].border
    /* let back = `bg-orange-300` */

    
    return(
        <div className={color + `  border-2 ${borderColor}`}>
            cell
        </div>
    )
}

export default Cell