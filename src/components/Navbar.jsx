import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import logo from "../img/logo_cropped.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [hideMenu, setHideMenu] = useState(true);
  const toggleMenu = (e) => {
    setHideMenu((current) => !current);
  };
  return (
    <>
      <div className="background__bar" />
      <div className="bigbar">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu">
            <div className="burger" onClick={toggleMenu}>
              <Hamburger hideMenu={hideMenu} />
            </div>
            <div className="links">
              <Link to="/?cat=recipes" className="link">
                RECIPES
              </Link>
              <Link to="/?cat=reviews" className="link">
                REVIEWS
              </Link>
              <Link to="/?cat=bftm" className="link">
                BEST FOR THE MONTH
              </Link>
              <Link to="/?cat=whiskey" className="link">
                WHISK(E)Y
              </Link>
              <Link to="/?cat=foryou" className="link">
                FOR YOU
              </Link>
              <p>|</p>
              <span>{currentUser?.username}</span>
              {currentUser ? (
                <span onClick={logout}>Logout</span>
              ) : (
                <Link className="link" to="/login">
                  Login
                </Link>
              )}
              <span className="write">
                <Link to="/write" className="link write">
                  Write
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={hideMenu ? "burger__list" : "burger__list active"}>
          <Link to="/?cat=recipes" className="link" onClick={toggleMenu}>
            RECIPES
          </Link>
          <Link to="/?cat=reviews" className="link" onClick={toggleMenu}>
            REVIEWS
          </Link>
          <Link to="/?cat=bftm" className="link" onClick={toggleMenu}>
            BEST FOR THE MONTH
          </Link>
          <Link to="/?cat=whiskey" className="link" onClick={toggleMenu}>
            WHISK(E)Y
          </Link>
          <Link to="/?cat=foryou" className="link" onClick={toggleMenu}>
            FOR YOU
          </Link>
          <Link to="/write" className="write" onClick={toggleMenu}>
            Write
          </Link>
          <span className="user__info">
            <div className="profile">{currentUser?.username}</div>
            <div className="logout">Logout</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
