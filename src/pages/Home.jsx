import FoodItems from "../components/FoodItems";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";

export default function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
}
