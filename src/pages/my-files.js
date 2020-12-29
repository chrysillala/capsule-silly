import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function myFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1>My Files Page</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>extension</th>
            <th>prettySize</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          { data.allFile.edges.map(({node}, index) => (
            <tr key={index}>
              <td>{ node.relativePath }</td>
              <td>{ node.extension }</td>
              <td>{ node.prettySize }</td>
              <td>{ node.birthTime }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(sort: {fields: size, order: DESC}) {
      edges {
        node {
          id
          base
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`