import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

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
            <span>Gilbert</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <button className="button__edit">Edit</button>
            </Link>
            <button className="button__delete">Delete</button>
          </div>
        </div>
        <h1>Lorem ipsum dolor blablablalbalbalba</h1>
        <p>
          For instance, HubSpot blogs about various topics concerning marketing,
          sales, and service because HubSpot sells products related to those
          three subjects -- so, more than likely, the type of readers HubSpot's
          blog attracts are going to be similar to HubSpot's core buyer persona.
          <br />
          <br />
          Alternatively, a woman named Kiki started a personal travel blog,
          called The Blonde Abroad, to document her travel experiences and
          provide readers with helpful tips and travel recommendations. Her blog
          doesn't serve a larger company, but it does help her create a personal
          brand.
          <br />
          <br />
          If a personal blog is successful enough, the writer can also make
          money off of it via sponsorships or advertisements. Take a look at 5
          Strategies to Monetize a Blog to learn more.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
