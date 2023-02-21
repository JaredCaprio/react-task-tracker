import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleAdd, color, text, showAddBtn }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      {showAddBtn}
      <Button color={color} text={text} cb={() => toggleAdd()} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
