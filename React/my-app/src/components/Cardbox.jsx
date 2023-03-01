import React,{useState} from "react";
import { Button } from "./Button";

export const Cardbox = (props) =>{
    const [vote,setVote]=useState(0)
    const increaseVote =()=>{
        if (vote ===10){
            alert("Cannot Vote more")
        }else{
            setVote(vote+1)
        }
    }
    const decreaseVote =()=>{
        if(vote===0){
        alert("Cannot UnVote more")
    }else{
        setVote(vote-1)
    }
    }
    return(
        <div className="w-[100%] border-solid border-black border-4 bg-[#ffebcd] rounded-lg p-6">
            <div className="flex">
                <div >
                    <h1 className="font-extrabold text-3xl my-4">{props.foodtype}</h1>
                    <h3 className="font-bold text-xl mb-4">{props.name}</h3>
                    <p>{props.info}</p>
                </div>
                <div className="w-[150%] ">
                    <img src={props.img} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-2">
                <Button type={"Click to Vote"} vote={increaseVote}></Button>
                <div className="px-2 py-4 bg-[#16FA00] text-purple-700 rounded-lg mx-5 font-extrabold border-black border-2 text-3xl">
                    <h1>{vote===0?"MIN":vote===10?"MAX":vote}</h1>
                </div>
                <Button type={"Click to Unvote"} vote={decreaseVote}></Button>
            </div>
        </div>

    )
}