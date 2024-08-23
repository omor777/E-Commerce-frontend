import { useSelector } from "react-redux";

const CartPage = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return <div>CartPage</div>;
};

export default CartPage;
