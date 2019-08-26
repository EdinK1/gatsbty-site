<<<<<<< HEAD
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import footerStyles from "./footer.module.scss";
=======
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
<<<<<<< HEAD
  `);
=======
  `)
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b

  return (
    <footer className={footerStyles.footer}>
      <p>
<<<<<<< HEAD
        Created with{" "}
        <span role="img" aria-label="coffe">
          &#9749;
        </span>{" "}
        by {data.site.siteMetadata.author}, &copy; 2019
      </p>
    </footer>
  );
};

export default Footer;
=======
        Created with{' '}
        <span role="img" aria-label="coffe">
          &#9749;
        </span>{' '}
        by {data.site.siteMetadata.author}, &copy; 2019
      </p>
    </footer>
  )
}

export default Footer
>>>>>>> 397b17ff921531db8857eee8dc607e3fb522d08b
