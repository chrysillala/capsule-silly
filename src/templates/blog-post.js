import React, { useState } from "react"
import { graphql } from 'gatsby'
import tw, { styled } from "twin.macro"
import Layout from '../components/layout'
import SEO from "../components/seo";

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const OrderBtn = (props) => {
    // You can use Hooks here!
    const [copy, setCopy] = useState(props.copy);
    const [disabled, setDisabled] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setCopy("OOPS, This room not available");
      setDisabled(true)
    }

    return (
      <div>
        <button
          css={tw`
            flex items-center justify-center rounded-md bg-blue-500 text-white
            py-2 px-4 mt-4
            disabled:opacity-50 disabled:cursor-not-allowed`
          }
          onClick={ handleClick }
          disabled={ disabled }
        >
          { copy }
        </button>
      </div>
    );
  }

  const TotalPrice = (props) => {
    const [price, setPrice] = useState(props.pricePerNight);

    const handleChange = (e) => {
      setPrice(e.target.value * props.pricePerNight)
    }

    return (
      <div css={tw`mt-4`}>
        <div>
          <label htmlFor="duration">Duration</label><br/>
          <input
            type="number" min="1" max="10" name="duration" placeholder="1"
            onChange={ handleChange }
          /> nights<br/>
        </div>
        <p css={tw`mt-2`}>Total <span css={tw`font-bold`}>IDR { price }</span></p>
      </div>
    )
  }

  return (
    <Layout>
      <SEO title={ post.frontmatter.title } description={ post.excerpt } />
      <img
        src={ post.frontmatter.thumbnail }
        alt={ post.frontmatter.title }
        css={tw`
          my-0 mx-auto md:h-80
        `}
      />
      <h1 css={tw`text-5xl font-semibold mb-4`}>{ post.frontmatter.title }</h1>
      <p css={tw`text-3xl mb-4`}>IDR { post.frontmatter.pricePerNight } <span css={tw`text-base`}>/ night</span></p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <TotalPrice pricePerNight={ post.frontmatter.pricePerNight } />
      <OrderBtn copy="Buy This" />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        pricePerNight
        thumbnail
      }
      excerpt
    }
  }
`