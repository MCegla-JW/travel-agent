import { Link } from "react-router";

const NavBar = () => {
  return (
    <header>
      <div id="brand-logo">
        <Link to="/">🏝️ Travel Agent 🏝️</Link>
      </div>

      <nav className="navbar">
        <Link to="/auth/sign-in">Sign In</Link>
        <Link to="/auth/sign-up">Create an account</Link>
      </nav>
    </header>
  );
};

export default NavBar;
