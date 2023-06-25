import React from "react";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://eesa.lbl.gov/wp-content/uploads/2014/11/Gilbert-Ben-Portrait-Oct-2016-1.jpg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
