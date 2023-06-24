import React from "react";
import logo_clear from "../img/logo_clear_cropped.png";

const Footer = () => {
  return (
    <footer>
      <div className="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span>Made with ❤️ by BeatHerCorp ;)</span>
      <img src={logo_clear} alt="logo" />
    </footer>
  );
};

export default Footer;
