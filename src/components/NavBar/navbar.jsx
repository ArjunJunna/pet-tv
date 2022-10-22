import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useDataContext } from '../../context/dataContext';
import { toast } from 'react-toastify';
import './navbar.css';
import '../../utilities/css/util.css';

const NavBar = () => {
  const navigate = useNavigate();
  const {data: { searchFor },dataDispatch} = useDataContext();

  const {auth: { isAuthorized },setAuth} = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({
      token: '',
      isAuthenticated: false,
    });
    toast.success('Logged out successfully !');
  };

  return (
    <nav className="navigation-hz">
      <div className="left-nav">
        <Link to="/" className="nav-logo">
          <img src="./assets/pettvlogo1.png" alt="logo" />
        </Link>
      </div>

      <div className="nav__search">
        <input
          type="search"
          placeholder="Search..."
          id="search--bar"
          value={searchFor}
          onChange={e => {
            navigate('/explore');
            dataDispatch({ type: 'SEARCH', payload: e.target.value });
          }}
        />
        <label htmlFor="search--bar">
          {searchFor === '' ? <i className="bi bi-search"></i> : null}
        </label>
      </div>

      <div className="right-nav">
        <li>
          {isAuthorized ? (
            <div onClick={handleLogout}>
              <Link className="link" to="/login">
                LOGOUT
              </Link>
            </div>
          ) : (
            <Link className="link" to="/login">
              LOGIN
            </Link>
          )}
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
