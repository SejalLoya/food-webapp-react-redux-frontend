import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const NavList = ({toggleNav, setToggleNav, auth}) => {
  const handleLogout = async() => {
    const res = await axios.get("https://swiggato-nodejs-backend.onrender.com/api/logout");
    const data = await res.data;
    toast.success(data.message);
    window.location.href = "/";
  }

  return (
    <div class={`${!toggleNav && "translate-x-[200px]"} fixed top-12 right-5 lg:right-8 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-white font-bold text-gray-600 transition-all duration-500 ease-in-out`}>
        {
      auth ? <li className='hover:text-black select-none list-none' onClick={handleLogout}>Logout</li> : 
      <div class="flex flex-col">
        <Link to = "/login" class="hover: text-black select-none">Login</Link>
        <Link to = "/signup">Signup</Link>
      </div> 
        }
    </div>
  )
}

export default NavList
