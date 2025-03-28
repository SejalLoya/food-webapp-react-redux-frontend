import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import NavList from "./NavList";
import axios from "axios";
import { loginUser, setUser } from "../redux/slices/AuthSlice";
import { getCart } from "../helper";
import { setCart } from "../redux/slices/CartSlice";
axios.defaults.withCredentials = true;

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleNav, setToggleNav] = useState(false);

  const auth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const res = await axios.get(`https://swiggato-nodejs-backend.onrender.com/api/get-user`, {
                withCredentials: true,
            });

            const data = res.data;
            console.log(data);
            dispatch(setUser(data.user));
            dispatch(loginUser());

            if (data.user) {
                const cartData = await getCart(data.user);
                dispatch(setCart(cartData.cartItems));
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    fetchUser();
}, []);


  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h1 className="text-4xl font-bold mt-6">Swiggato</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
      <div class={`absolute top-5 right-10 lg:right-10 lg:top-4 text-2xl text-gray-400 cursor-pointer ${toggleNav && "hidden"} transition-all ease-in-out duration-500`} 
      onClick={() => setToggleNav(true)}>☰</div>
            <div class={`absolute top-5 right-10 lg:right-10 lg:top-4 text-2xl text-gray-400 cursor-pointer ${!toggleNav && "hidden"} transition-all ease-in-out duration-500`} 
      onClick={() => setToggleNav(false)}>X</div>
      <NavList toggleNav={toggleNav} setToggleNav={setToggleNav} auth={auth} />
    </nav>
  );
};

export default Navbar;