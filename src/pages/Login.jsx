import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slices/AuthSlice';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

        const res = await axios.post(`https://swiggato-nodejs-backend.onrender.com/api/login`, { email, password });
        const data = await res.data;
        if (res.status === 201 || res.status === 200) {
            dispatch(loginUser);
            toast.success(data.message);
          navigate("/");
        }
};


  return (
    <div class="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} action="" class="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm">
        <input type="email" name="email" id="email" class="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
        autoComplete='off'
        placeholder='example@gmail.com'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
          <input type="password" name="password" id="password" class="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
        autoComplete='off'
        placeholder='xxxxxxx'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgot-password" class="text-xs text-gray-600 cursor-pointer hover:underline -mb-1">Forgot Password? Click here</Link>
        <button type='submit' class="outline-none border rounded-md px-3 py-2 text-white bg-blue-400 hover:bg-blue-300">Login</button>
        <p class="text-xs text-gray-400 flex gap-2 -mt-1">
          <span>Or</span>
          <Link to="/signup" class="text-xs text-gray-600 cursor-pointer hover:underline -mb-1">Create your account</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
