<<<<<<< HEAD
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
=======
import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header isOpen={props.isOpen} />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
