import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Category = props => {
  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  // const { title: siteTitle } = data.site.siteMetadata
  const { name: category } = pageContext
  const title = `${totalCount} post${
    totalCount === 1 ? '' : 's'
    } in the “${category}” category`

  return (
    <Layout>
      <section class="intro mb4 mb5-ns">
        <div class="mw8 center ph3 cf">
          <div class="fl w-100 w-70-ns">
            <div>
              <h1>Category: {category}</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="mw8 ph3 center mv4">
        <h1></h1>
      </div>
      <Helmet title={`${category} - Baillie O'Grady`} />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
