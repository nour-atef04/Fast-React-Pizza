import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-600 text-stone-50 uppercase p-4 flex items-center justify-between">
      <p className="text-stone-200 font-semibold space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
