import React from "react";

const Repo = ({ repo }) => {
  const { name, html, url, description, language } = repo;
  return (
    <div className="repo">
      <h3>
        <a href="#">{name}</a>
      </h3>
      <p>{description}</p>
      {language && <small>Wrriten in {language}</small>}
    </div>
  );
};

export default Repo;
