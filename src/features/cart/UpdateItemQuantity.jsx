import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import PropTypes from "prop-types";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  id: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
};
