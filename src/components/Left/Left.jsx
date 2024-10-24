import React from 'react'
import { RiMenuFill } from 'react-icons/ri'
import './left.css'
import { IoHome } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { IoMdChatboxes } from "react-icons/io";

export default function Left() {
  return (
    <div className="dropdown">
        <button className="dropbtn"><RiMenuFill  size={30} color='gray' /></button>
        <div className="dropdowncontentft z-[99]">
            <div onClick={()=> window.location.replace(`https://localhost:3000`)} className='w-full flex justify-start items-center gap-3 p-2 rounded-t-md font-semibold text-[#666] hover:cursor-pointer hover:bg-[#999]'><IoHome size={18} color='gray' /> <p>Home</p></div>
            <div onClick={()=> window.location.replace(`https://localhost:3000/feed`)} className='w-full flex justify-start items-center gap-3 p-2 font-semibold text-[#666] hover:cursor-pointer hover:bg-[#999]'><RiPagesFill size={18} color='gray' /> <p>Feed</p></div>
            <div onClick={()=> ()=> window.location.replace(`https://localhost:3000/chat`)} className='w-full flex justify-start items-center gap-3 p-2 font-semibold text-[#666] hover:cursor-pointer hover:bg-[#999] rounded-b-md'><IoMdChatboxes size={18} color='gray' /> <p>Chat</p></div>
        </div>
    </div>
  )
}
