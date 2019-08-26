import React from "react";

import SingleProjectStyles from "./project.module.scss";

const SingleProject = ({ img, title, desc, liveLink, githubLink }) => {
  return (
    <li className={SingleProjectStyles.project}>
      <div>
        <img src={img} alt={desc} />
        <h1>{title}</h1>
        <p>{desc}</p>
        <a href={liveLink}>View Project</a>
        <a href={githubLink}>View Code</a>
      </div>
    </li>
  );
};

export default SingleProject;
