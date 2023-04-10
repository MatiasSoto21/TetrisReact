import React from "react";
import { TETROMINOS } from "@/utils/tetrominos";

const Cell = ({type}) => {

    let color = `#dfad24`
    console.log(color);
    let bg = `bg-[${color}]`
    console.log(bg);
    
    return(
        <div className={`bg-[${color}]`} >
            cell
        </div>
    )
}

export default Cell