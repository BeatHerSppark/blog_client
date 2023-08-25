import React from "react";

const Hamburger = ({ hideMenu }) => {
  return (
    <>
      <div className="hamburger">
        <div className="hamburger__box burger1" />
        <div className="hamburger__box burger2" />
        <div className="hamburger__box burger3" />
      </div>

      <style jsx="true">{`
        .hamburger {
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
        }

        .hamburger__box {
          width: 2rem;
          height: 0.2rem;
          border-radius: 10px;
          background-color: white;
          transform-origin: 1px;
          transition: all 0.2s linear;
        }

        .burger1 {
          transform: ${hideMenu ? "rotate(0)" : "rotate(45deg)"};
        }
        .burger2 {
          transform: ${hideMenu ? "translateX(0)" : "translateX(100%)"};
          opacity: ${hideMenu ? 1 : 0};
        }
        .burger3 {
          transform: ${hideMenu ? "rotate(0)" : "rotate(-45deg)"};
        }
      `}</style>
    </>
  );
};

export default Hamburger;
