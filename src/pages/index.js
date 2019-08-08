import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Edin, a full-stack developer living in Vancouver</h2>
      <p>
        Need a Developer ? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
