import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";
import { useHistory } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const history = useHistory();
  const store = useContext(StoreContext);
  const [token, setToken] = useState(localStorage.getItem("user-token"));

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    setToken(null);
    store.user = null;
    history.push("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logo192.png"
            alt="Blog Application"
            width="50"
            height="50"
            className="d-inline-block align-text-center"
          />
          React Blog App
        </Link>
      </div>
      <div
        className="nav-links collapse navbar-collapse w-50"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          {token ? (
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          {!token && (
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link className="nav-link" to={token ? "/post-blog" : "/login"}>
              Post a Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
