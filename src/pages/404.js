import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Header from '../components/header'
import Layout from '../components/layout'

const NotFound = ({ location }) => {
  return (
    <Layout>
      <Head title="404" />
      <Header isOpen={location.state.isToggled} />
      <h1>Wow buddy, you lost?</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
