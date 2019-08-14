import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            id
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout isOpen={location ? location.state.isToggled : null}>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ul className={blogStyles.blogs}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.blog} key={edge.node.id}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
