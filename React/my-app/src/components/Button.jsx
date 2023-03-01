import React from "react";

export const Button = (props) =>{
    const voteUnvote=()=>{
        props.vote()
    }
    return(
        <div className="bg-gray-100 hover:bg-grey-200 text-grey-800 py-2 px-4 border border-black border-1 rounded cursor-pointer" onClick={voteUnvote}>
            {props.type}
        </div>
    )
}