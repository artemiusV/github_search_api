import React, { useState, useEffect } from "react";
import "./User.css";
import site from "../../../assets/site.png";
import github from "../../../assets/github.png";
import location from "../../../assets/location.png";
import user from "../../../assets/user.png";
import { Link, useParams } from "react-router-dom";
import axios from "../../../axios";

const User = () => {
  const { login } = useParams();

  // user info
  const [userInfo, setUserInfo] = useState({});
  // user repos
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
        // console.log(response[0].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  }, []);

  return (
    <div className="container">
      <Link to="/" className="back">
        Back
      </Link>
      <div className="user-information">
        <div className="image">
          <img src={userInfo?.avatar_url} />
        </div>
        <div className="user-content">
          <h3>{userInfo?.name}</h3>
          <p>{userInfo?.bio}</p>

          <div className="more-data">
            <p>
              <img src={user} alt="" />
              {userInfo?.followers} Followers. Following {userInfo?.following}
            </p>
            {userInfo?.location && (
              <p>
                <img src={location} alt="" />
                {userInfo?.location}
              </p>
            )}
            {userInfo?.blog && (
              <p>
                <img src={site} alt="" />
                {userInfo?.blog}
              </p>
            )}
            <p>
              <img src={github} alt="" />
              <a href={userInfo?.html_url}>View GitHub Profile</a>
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
