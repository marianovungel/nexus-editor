import React, { useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { useUser } from '../UseContext';
import './menu.css'
const AvatarULR = "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"


export default function Menu() {
  const { user } = useUser();
  console.log(user)

  useEffect(()=>{
    const VerifyUser =()=>{
      console.log(user)
      if(!user){
        // window.location.replace(`https://localhost:3000/login`)
        console.log(user)
      }
    }
    VerifyUser()
  }, [user])

  const OpenArgito = (docId)=>{
    window.location.replace(`https://lastnexus.vercel.app/${docId}`)
  }

  return (
    <header className=" sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white h-20">
      <img onClick={()=> OpenArgito("")} src="../image/btextt.png"  alt="" className='cursor-pointer object-cover h-8' />
      <div id='searchId' className="mx-5 md:mx-20 flex flex-grow items-center px-2 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <IoMdSearch size={30} color="gray" />
        <input type="text" placeholder="Search" className="flex-grow px-2 text-base bg-transparent outline-none" />
      </div>
      {/* <Link to='/notification'  className="mr-2 border-0 relative flex items-center cursor-pointer h-10 w-8">
        <IoNotifications size={30} color="gray"/>
        {supernotification > 0 && (<i style={{fontSize: 9, padding:1}} className='bg-red-600 text-white rounded-full absolute top-0 right-0 min-w-4 flex justify-center items-center'>{supernotification > 99 ? "99+" : supernotification }</i>)}
      </Link> */}
      <img onClick={()=> OpenArgito("profile")} className='w-8 h-8 rounded-full object-cover' src={ AvatarULR } alt="" />
  </header>
  )
}
