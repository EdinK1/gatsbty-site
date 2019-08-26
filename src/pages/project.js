import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import SingleProject from "../components/project";

import ProjectStyles from "../components/project.module.scss";

const Project = ({ location, desc }) => (
  <Layout isOpen={location ? location.state.isToggled : null}>
    <Head title='Project' />
    <h1 className={ProjectStyles.title}>Some of my work </h1>
    <ul className={ProjectStyles.projects}>
      <SingleProject
        img='https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
        alt={desc}
        title='memesmemes'
        desc='meme generator with React'
        liveLink='https://memesmemes.netlify.com'
        githubLink='https://github.com/EdinK1/memesmemes'
      />

      <SingleProject
        img='https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
        alt={desc}
        title='memesmemes'
        desc='meme generator with React'
        liveLink='https://memesmemes.netlify.com'
        githubLink='https://github.com/EdinK1/memesmemes'
      />

      <SingleProject
        img='https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
        alt={desc}
        title='memesmemes'
        desc='meme generator with React'
        liveLink='https://memesmemes.netlify.com'
        githubLink='https://github.com/EdinK1/memesmemes'
      />

      <SingleProject
        img='https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
        alt={desc}
        title='memesmemes'
        desc='meme generator with React'
        liveLink='https://memesmemes.netlify.com'
        githubLink='https://github.com/EdinK1/memesmemes'
      />

      <SingleProject
        img='https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
        alt={desc}
        title='memesmemes'
        desc='meme generator with React'
        liveLink='https://memesmemes.netlify.com'
        githubLink='https://github.com/EdinK1/memesmemes'
      />

      <SingleProject
        img='https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg'
        alt={desc}
        title='memesmemes'
        desc='meme generator with React'
        liveLink='https://memesmemes.netlify.com'
        githubLink='https://github.com/EdinK1/memesmemes'
      />
    </ul>
  </Layout>
);

export default Project;
