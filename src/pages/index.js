import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/react'
import tw, { styled } from "twin.macro"
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

const ItemContainer = tw.section`
  grid gap-4 md:grid-cols-3
`

const ItemLink = styled(Link)([
  tw`w-full flex flex-col h-full justify-between p-4 rounded-lg
    transition-shadow shadow-lg hover:shadow-xl`,
  css`
    text-decoration: none;
    color: inherit;
  `
])

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1 css={[tw`text-3xl`]}>
        Welcome to Capsule Hotel
      </h1>
      <div>
        <img src="https://thumb.photo-ac.com/0d/0d493902733375fe03d1d9954ba85320_w.jpeg"
          alt="Capsule Hotel illustration"
          css={tw`w-full object-cover h-80`}
        />
      </div>
      <h4 css={tw`mb-2`}>{ data.allMarkdownRemark.totalCount } Room Types</h4>
      <ItemContainer>
      { data.allMarkdownRemark.edges.map(({node}) => (
        <article key={node.id}>
          <ItemLink to={ node.fields.slug }>
            <img
              src={ node.frontmatter.thumbnail }
              alt={ node.frontmatter.title }
              css={[tw`w-full h-60 object-contain`]}
            />
            <div>
              <h3
                css={[
                  tw`text-xl`,
                  css`
                    margin-bottom: ${rhythm(1 / 4)};
                `]}
              >
                { node.frontmatter.title }
              </h3>
              <p
                css={[
                  tw`overflow-hidden`,
                  css`
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                `]}
              >{ node.excerpt }</p>
            </div>
          </ItemLink>
        </article>
      )) }
      </ItemContainer>
    </Layout>
  )
}

export const query = graphql`
 query {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    totalCount
    edges {
      node {
        id
        html
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "DD MMM YYYY")
          title
          thumbnail
        }
        fields {
          slug
        }
      }
    }
  }
 }
`
