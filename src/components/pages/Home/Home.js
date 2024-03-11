import React, { useState } from "react";
import "./Home.css";
import axios from "../../../axios";
import User from "../../ui/User.js";

const Home = () => {
  const [query, setQuery] = useState("");
  //users Fetched from API
  const [users, setUsers] = useState([]);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    // console.log(e.target.value);
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/search/users?q=" + query);
      return data?.items;
    } catch (error) {
      return null;
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("Ypur query is empty ...");
    }
  };

  return (
    <div className="container">
      <div className="search-form">
        <h2>GitHub Search User</h2>
        <form action="">
          <input value={query} onChange={handleQueryInput} type="text" />
          <button onClick={handleSearchUsers}>Search</button>
        </form>
      </div>
      <div className="search-result">
        {users ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          <h2>There is nothing to display...</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
