import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = ({ location }) => {
  return (
    <Layout isOpen={location.state ? location.state.isToggled : null}>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Edin, a full-stack developer living in Vancouver</h2>
    </Layout>
  )
}

export default IndexPage
