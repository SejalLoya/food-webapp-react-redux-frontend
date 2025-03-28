import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        // Prevent submitting empty values
        if (!name || !email || !password) {
            toast.error("All fields are required.");
            return;
        }

        try {
            const res = await axios.post(`http://localhost:5003/api/signup`, { name, email, password });

            if (res.status === 201 || res.status === 200) {
                toast.success(res.data.message);
                navigate("/login");
            }
        } catch (error) {
            if (error.response) {
                // Server responded with an error status
                toast.error(error.response.data.message || "Signup failed.");
            } else {
                // Network error or no response
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSignup} className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[80vw] lg:w-[20vw] text-sm">
                <input type="text" name="name" id="name" className="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
                    autoComplete="off"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="email" name="email" id="email" className="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
                    autoComplete="off"
                    placeholder="example@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" name="password" id="password" className="outline-none border rounded-md px-3 py-2 focus:border-blue-400 text-gray-600"
                    autoComplete="off"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="outline-none border rounded-md px-3 py-2 text-white bg-blue-400 hover:bg-blue-300">Sign Up</button>
                <p className="text-xs text-gray-400 flex gap-2 -mt-1">
                    <span>Or</span>
                    <Link to="/login" className="text-xs text-gray-600 cursor-pointer hover:underline -mb-1">Already have an account? Login here</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
