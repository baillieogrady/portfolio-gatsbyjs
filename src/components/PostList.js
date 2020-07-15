import React from 'react'
import { Link, graphql } from 'gatsby'

export default class PostList extends React.Component {
  render() {
    const { posts } = this.props

    return (

      <div className="posts mw8 center ph3 flex flex-wrap justify-between">
        {posts.map(({ node: post }, i) => (
          <div
            className={i === 0 || i % 2 === 0 ? 'mb3 mb4-ns w-100 w-50-ns pr3-m pr3-l' : 'mb3 mb4-ns w-100 w-50-ns pl3-m pl3-l'}
            key={post.id}
          >
            <article>
              <header>
                <h2 className="entry-title mb3 f4 f3-ns pt2 fw6">
                  <Link className="no-underline dark-gray" to={`/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }}>
                  </Link>
                </h2>
              </header>
              <div
                className="mt3"
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                }}
              />
            </article>
          </div>
        ))}
      </div>
    )
  }
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    slug
  }
`