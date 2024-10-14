import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import Button from './Button'

const ButtonForm = () => {
  return (
    <div className='w-96 border-2 px-2 ml-24 justify-center flex flex-col items-center gap-3'>
    <div className="flex gap-x-2 mt-8">
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage/>} bg={false}/>
        <Button text="VIA CALL" icon={<IoMdCall/>} bg={false}/>
    </div>
    <div className="w-72 border-2 border-black">
    <Button text="VIA EMAIL FORM" icon={<MdMessage/>} bg={true}/>
    </div >
    </div>
  )
}

export default ButtonForm
