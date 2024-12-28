import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Header = () => {
  const [userName, setUserName] = useState(null);

  const fetchUserName = () => {
    const storedUserName = localStorage.getItem("userName");
    setUserName(storedUserName);
  };

  useEffect(() => {
    fetchUserName();
    window.addEventListener("storageUpdate", fetchUserName);
    return () => window.removeEventListener("storageUpdate", fetchUserName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
    window.dispatchEvent(new Event("storageUpdate"));
  };

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>HamHama</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">
                  Feedback
                </Link>
              </li>
            </ul>
            <div className="user_option">
              {userName ? (
                <>
                  <span className="user_name me-2">
                    Bonjour, <strong>{userName}</strong>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger ms-2"
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </>
              ) : (
                <Link to="/login" className="user_link">
                  <i className="fa-solid fa-user"></i>
                </Link>
              )}
              <Link className="cart_link" to="/panier">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              {!userName && (
                <Link to="/register" className="order_online">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
