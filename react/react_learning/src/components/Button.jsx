import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";

const Button = (props) => {
  return (
    <div>
      
      <button className={`${props.bg ? 'bg-white text-black' : 'bg-black text-white outline outline-2 outline-black'} flex justify-center items-center p-2 gap-2 rounded-md`}>
  {props.icon}
  {props.text}
</button>

       
    </div>
  )
}

export default Button
