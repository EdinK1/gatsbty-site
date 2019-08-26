import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

import IndexStyles from "./index.module.scss";

const IndexPage = ({ location }) => {
  return (
    <Layout
      className={IndexStyles.home}
      isOpen={location.state ? location.state.isToggled : null}
    >
      <Head title='Home' />
      <h1 className={IndexStyles.greeting}>Hi there,</h1>
      <h2 className={IndexStyles.me}>I'm Edin,</h2>
      <h3 className={IndexStyles.location}>
        web developer living in Vancouver
      </h3>
      <Link className={IndexStyles.viewWorkBtn} to='/project'>
        View my work
      </Link>
    </Layout>
  );
};

export default IndexPage;
