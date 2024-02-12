import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <button>
        <Link to="/"> Home </Link>
      </button>
      <button>
        {" "}
        <Link to="/signin"> Sign In </Link>
      </button>
      <button>
        {" "}
        <Link to="/register"> Register </Link>
      </button>
    </nav>
  );
};

export default NavBar;
