<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "gatsby";
=======
import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
import {
  FaHome,
  FaUserTie,
  FaCode,
  FaBloggerB,
  FaEnvelope,
<<<<<<< HEAD
  FaBars
} from "react-icons/fa";
import headerStyles from "./header.module.scss";

const Header = ({ isOpen = false }) => {
  const [isToggled, setToggled] = useState(isOpen);
=======
  FaBars,
} from 'react-icons/fa'
import headerStyles from './header.module.scss'

const Header = ({ isOpen = false }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isToggled, setToggled] = useState(isOpen)
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerTop}>
<<<<<<< HEAD
        <Link
          state={{ isToggled }}
          className={`${headerStyles.headerLogo} ${
            isToggled ? headerStyles.show : ""
          }`}
          to='/'
        >
          <img src='./logo.svg' alt='' />
        </Link>
=======
        <h1>
          <Link
            state={{ isToggled }}
            className={`${headerStyles.title} ${
              isToggled ? headerStyles.show : ''
            }`}
            to="/"
          >
            {data.site.siteMetadata.title}
          </Link>
        </h1>
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
        <FaBars
          onClick={() => setToggled(!isToggled)}
          className={headerStyles.headerHamburger}
        />
      </div>
      <nav className={headerStyles.nav}>
        <ul
          className={`${headerStyles.navList} ${
<<<<<<< HEAD
            isToggled ? headerStyles.showNav : ""
=======
            isToggled ? headerStyles.showNav : ''
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
          }`}
        >
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
<<<<<<< HEAD
              to='/'
=======
              to="/"
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
            >
              <FaHome />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
<<<<<<< HEAD
              to='/about'
=======
              to="/about"
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
            >
              <FaUserTie />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
<<<<<<< HEAD
              to='/project'
=======
              to="/project"
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
            >
              <FaCode />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
<<<<<<< HEAD
              to='/blog'
=======
              to="/blog"
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
            >
              <FaBloggerB />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
<<<<<<< HEAD
              to='/contact'
=======
              to="/contact"
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
            >
              <FaEnvelope />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
<<<<<<< HEAD
  );
};

export default Header;
=======
  )
}

export default Header
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
