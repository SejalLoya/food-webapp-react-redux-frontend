import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleResetPassword = async(e) => {
    e.preventDefault();

    try {
      const res = await axios.put("https://swiggato-nodejs-backend.onrender.com/api/reset-password", {
        email
      });
      const data = await res.data;
      if(data.success) {
        toast.success(data.message);
        navigate("/verify-otp");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
    const [email, setEmail] = useState("");
    
  return (
<div class="flex justify-center items-center h-screen">
      <form action="" class="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[23vw] text-sm" onSubmit={handleResetPassword}>
        <span class="text-lg text-gray-600 -mb-1 text-center">Enter your Email for verification</span>
        <input type="email" name="email" id="email" class="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
        autoComplete='off'
        placeholder='example@gmail.com'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
       
        <button type='submit' class="outline-none border rounded-md px-3 py-2 text-white bg-blue-400 hover:bg-blue-300">Send OTP</button>
      </form>
    </div>
  )
}

export default ResetPassword
