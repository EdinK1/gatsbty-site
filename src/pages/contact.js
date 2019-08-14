import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = ({ location }) => {
  return (
    <Layout isOpen={location ? location.state.isToggled : null}>
      <Head title="Contact" />
      <h1>Contact me</h1>
      <p>
        I can be contacted through
        <a href="https://github.com/EdinK1/"> @github</a>
      </p>
    </Layout>
  )
}

export default ContactPage
