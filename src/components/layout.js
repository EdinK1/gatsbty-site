import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";

const Layout = props => {
  return (
    <>
      <Header isOpen={props.isOpen} />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.content}>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
