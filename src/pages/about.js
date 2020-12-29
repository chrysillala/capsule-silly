// For now, keep in mind that only pages can make page queries

import React from "react"
import { graphql } from 'gatsby'
import tw, { styled } from "twin.macro"
import Layout from '../components/layout'

export default function About({ data }) {
  return (
    <Layout>
      <h1>About { data.site.siteMetadata.title }</h1>
      <p>Hello this is about page, means you wanna know more about us but we couldn't tell you yet</p>
      <p>- Manager</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`