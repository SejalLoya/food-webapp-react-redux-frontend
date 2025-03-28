import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function VerifyOtp() {
    const [otp,setOtp] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleVerifyOtp = async(e) => {
      e.preventDefault();
      try {
        const res = await axios.put("http://localhost:5003/api/verify-otp", {
          otp, newPassword:password,
        });
        const data = await res.data;
        if(data.success) {
          toast.success(data.message);
          navigate("/login");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  return (
<div class="flex justify-center items-center h-screen">
      <form onSubmit={handleVerifyOtp} action = "" class = "bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[23vw] text-sm">
        <span class="text-lg text-gray-600 -mb-1 text-center">Enter your Email for verification</span>
        <input type="tel" name="otp" id="otp" class="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
        autoComplete='off'
        placeholder='Enter Otp'
        required
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        />
        <input type="password" name="password" id="password" class="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
        autoComplete='off'
        placeholder='Enter new Password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' class="outline-none border rounded-md px-3 py-2 text-white bg-blue-400 hover:bg-blue-300">Reset Password</button>
      </form>
    </div>
  )
}

export default VerifyOtp
