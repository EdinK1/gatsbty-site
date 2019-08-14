import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {
  FaHome,
  FaUserTie,
  FaCode,
  FaBloggerB,
  FaEnvelope,
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

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerTop}>
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
        <FaBars
          onClick={() => setToggled(!isToggled)}
          className={headerStyles.headerHamburger}
        />
      </div>
      <nav className={headerStyles.nav}>
        <ul
          className={`${headerStyles.navList} ${
            isToggled ? headerStyles.showNav : ''
          }`}
        >
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              <FaHome />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              <FaUserTie />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/project"
            >
              <FaCode />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              <FaBloggerB />
            </Link>
          </li>
          <li>
            <Link
              state={{ isToggled }}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              <FaEnvelope />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
