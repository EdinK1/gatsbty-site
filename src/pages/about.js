import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const AboutPage = ({ location }) => {
  return (
    <Layout isOpen={location ? location.state.isToggled : null}>
      <Head title="About" />
      <h1>About</h1>
      <p>About page of the page</p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutPage
