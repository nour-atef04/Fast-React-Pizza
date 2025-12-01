import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm bg-rose-700 hover:bg-rose-500 transition-colors duration-300 uppercase font-semibold inline-block tracking-wide rounded-full focus:outline-none focus:ring focus:ring-red-500 focus:bg-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm hover:bg-stone-300 hover:text-stone-800 border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 text-stone-400 transition-colors duration-300 uppercase font-semibold inline-block tracking-wide rounded-full focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 focus:text-stone-800 disabled:cursor-not-allowed",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
