import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Nour</p>
    </header>
  );
}
