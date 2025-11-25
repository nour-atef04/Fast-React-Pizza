import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {
  const className =
    "bg-rose-700 hover:bg-rose-500 transition-colors duration-300 uppercase font-semibold py-3 px-4 inline-block tracking-wide rounded-full focus:outline-none focus:ring focus:ring-red-500 focus:bg-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
  if (to) {
    return <Link to={to} className={className}>{children}</Link>;
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.node.isRequired,
};
