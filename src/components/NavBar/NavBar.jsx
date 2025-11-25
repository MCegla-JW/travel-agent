import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const NavBar = () => {
    const { user } = useContext(UserContext)
  return (
    <header className='navbar'>
      <div id="brand-logo">
        <Link to="/">🏝️ Travel Agent 🏝️</Link>
      </div>

      <div className='account-link'>
        {user ? (
            <Link to='/account'>{user.username}</Link>
        ): (
            <Link to='/auth/sign-in'>Touch your dreams</Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
