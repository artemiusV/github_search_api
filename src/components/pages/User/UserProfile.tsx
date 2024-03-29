import React, { useState, useEffect } from "react";
import "./User.css";
import { Repo } from "../../ui/Repo";
import site from "../../../assets/site.png";
import github from "../../../assets/github.png";
import location from "../../../assets/location.png";
import user from "../../../assets/user.png";
import { Link, useParams } from "react-router-dom";
import { fetchUserData, fetchUserRepos } from "../../../api";
// import {axios} from '../../../api'

interface UserInfo {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  html_url: string;
}

interface RepoInfo {
  id: number;
  name: string;
  description: string;
  language: string;
}

export const User: React.FC = () => {
  const { login } = useParams<{ login: string }>();

  // user info
  const [userInfo, setUserInfo] = useState<UserInfo>({
    avatar_url: "",
    name: "",
    bio: "",
    followers: 0,
    following: 0,
    location: null,
    blog: null,
    html_url: "",
  });
  // user repos
  const [repos, setRepos] = useState<RepoInfo[]>([]);

  useEffect(() => {
    if (!login) {
      return;
    }

    const fetchUserInformation = async (login: string) => {
      const respon1 = await fetchUserData(login);
      const respons2 = await fetchUserRepos(login);
      setUserInfo(respon1.data);
      setRepos(respons2.data);
    };
    fetchUserInformation(login);
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
      <div className="user-repos">
        {repos ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No repos for this user...</h2>
        )}
      </div>
    </div>
  );
};
