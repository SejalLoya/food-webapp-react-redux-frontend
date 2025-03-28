import axios from "axios";

export const getCart = async (user) => {
    if (!user || !user._id) {
        return [];
    }

    try {
        const res = await axios.get(`https://swiggato-nodejs-backend.onrender.com/api/get-cart/${user._id}`, {
            withCredentials: true,
        });

        return res.data;
    } catch (error) {
        console.error("Error fetching cart:", error.message);
        return [];
    }
};
