import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import logo from "../img/logo_cropped.png";

const Navbar = () => {
  const [hideMenu, setHideMenu] = useState(true);
  const handleClick = (e) => {
    setHideMenu((current) => !current);
  };
  return (
    <>
      <div className="background__bar" />
      <div className="bigbar">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menu">
            <div className="burger" onClick={handleClick}>
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
              <span>Beator</span>
              <span>Logout</span>
              <span className="write">
                <Link to="/write" className="link write">
                  Write
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={hideMenu ? "burger__list" : "burger__list active"}>
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
          <Link to="/write" className="write">
            Write
          </Link>
          <span className="user__info">
            <div className="profile">Beator</div>
            <div className="logout">Logout</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
