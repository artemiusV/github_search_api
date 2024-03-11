import React from "react";
import "./User.css";
import site from "../../../assets/site.png";
import github from "../../../assets/github.png";
import location from "../../../assets/location.png";
import user from "../../../assets/user.png";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="container">
      <Link to="/" className="back">
        Back
      </Link>
      <div className="user-information">
        <div className="image">
          <img src="https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" />
        </div>
        <div className="user-content">
          <h3>Name of the User</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta
            reprehenderit rem neque id unde earum, fugit, assumenda accusantium
            esse in officia omnis placeat. Accusamus cum tempore suscipit nemo
            ratione.
          </p>

          <div className="more-data">
            <p>
              <img src={user} alt="" />
              20 Followers. Following 10
            </p>
            <p>
              <img src={location} alt="" />
              SouthAfrica
            </p>
            <p>
              <img src={site} alt="" />
              portfolio.com
            </p>
            <p>
              <img src={github} alt="" />
              <a href="#">View GitHub Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className="user-repo">
        <div className="repo">
          <h3>
            <a href="#">Name of the Repo</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            rem fugit, dolor quam facere, soluta quibusdam corrupti quaerat
            itaque beatae dignissimos, error doloribus perspiciatis! Itaque
            similique vitae nemo vero.
          </p>
          <small>Wrriten in JS</small>
        </div>
      </div>
      <div className="user-repo">
        <div className="repo">
          <h3>
            <a href="#">Name of the Repo</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            rem fugit, dolor quam facere, soluta quibusdam corrupti quaerat
            itaque beatae dignissimos, error doloribus perspiciatis! Itaque
            similique vitae nemo vero.
          </p>
          <small>Wrriten in JS</small>
        </div>
      </div>
      <div className="user-repo">
        <div className="repo">
          <h3>
            <a href="#">Name of the Repo</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            rem fugit, dolor quam facere, soluta quibusdam corrupti quaerat
            itaque beatae dignissimos, error doloribus perspiciatis! Itaque
            similique vitae nemo vero.
          </p>
          <small>Wrriten in JS</small>
        </div>
      </div>
      <div className="user-repo">
        <div className="repo">
          <h3>
            <a href="#">Name of the Repo</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            rem fugit, dolor quam facere, soluta quibusdam corrupti quaerat
            itaque beatae dignissimos, error doloribus perspiciatis! Itaque
            similique vitae nemo vero.
          </p>
          <small>Wrriten in JS</small>
        </div>
      </div>
    </div>
  );
};

export default User;
