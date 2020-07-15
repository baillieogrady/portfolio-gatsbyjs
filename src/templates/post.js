import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import image from "../img/image.png"


export const BlogPostTemplate = ({
  content,
  categories,
  title,
  date,
}) => {
  return (
    <div>
      <div className="mw8 ph3 center flex items-start">
        <article className="w-100 w-60-l center">
          <header>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <p className="mt3 mb4">
              <time className="updated dib f7">{date}</time>
            </p>
          </header>
          <div>
            <div className="flex flex-column relative">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              {categories && categories.length ? (
                <div>
                  <ul className="list pa0 ma0 mv3">
                    {categories.map(category => (
                      <li key={`${category.slug}`} className="dib bg-light-grey ma0 mr2">
                        <Link to={`/categories/${category.slug}/`} className="dark-gray box-shadow-none dib pv1 ph2 bg-near-white br1 f7 ttu tracked">
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      </div>
      <div className="mw8 ph3 center">
        <div className="w-100 w-60-l center">
          <hr style={{ borderBottom: "1px solid #999" }} className="bn mv4 mv5-ns" />
          <h3>Helpful?</h3>
          <p>I really enjoy writing these articles and any support will only fuel me to create more. You can support me <a href="https://ko-fi.com/baillieogrady">here</a>, all the proceeds will most likely buy coffee or another infamous laptop dongle.</p> 
        </div>
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  // meta
  const excerpt = post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")
  excerpt.replace("&#8217;", "'")
  const excerptSlim = excerpt
    .split(/\s+/)
    .slice(0, 20)
    .join(" ")

  const cats = post.categories.map(cat => cat.name);
  cats.toString();

  return (
    <Layout>
      <Helmet
        title={`${post.title} - Baillie O'Grady`}
        meta={[
          { name: 'description', content: excerptSlim },
          { name: 'keywords', content: cats },
          { name: 'og:image', content: image },
          { name: 'og:image:type', content: 'image/png' },
          { name: 'og:image:width', content: '1024' },
          { name: 'og:image:height', content: '1024' },
          { name: 'og:description', content: excerptSlim },
          { name: 'og:url', content: `https://baillieogrady.com/${post.slug}` }
        ]}
      />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        title={post.title}
        date={post.date}
        link={post.link}
        id={post.id}
        excerpt={post.excerpt}
        acf={post.acf}
        featured_media={post.featured_media}
        slug={post.slug}
      />

    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "Do MMMM YYYY")
      link
      excerpt
      wordpress_id
      categories {
        name
        wordpress_id
        slug
      }
      acf {
        image_credit
        image_credit_name
      }
    }
  }
`