import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

export default function Header() {
  return (
    <header className="font-pizza bg-rose-700 uppercase px-4 py-3 border-b-4 border-stone-300 flex items-center justify-between">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
