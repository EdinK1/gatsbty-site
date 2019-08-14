import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const Project = ({ location }) => {
  return (
    <Layout isOpen={location ? location.state.isToggled : null}>
      <Head title="Project" />
      <h1>Some of my projects </h1>
    </Layout>
  )
}

export default Project
