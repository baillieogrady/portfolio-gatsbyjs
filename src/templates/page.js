import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

// flexible field blocks
import Layout from '../components/Layout'
import Intro from '../components/blocks/Intro'
import TwoColumn from '../components/blocks/TwoColumn'
import Projects from '../components/blocks/Projects'
import Articles from '../components/blocks/Articles'
// import Videos from '../components/blocks/Videos'

const Page = ({ data }) => {
  const { wordpressPage: page } = data
  let title = page.title.toLowerCase()
  title = title.charAt(0).toUpperCase() + title.substring(1)
  page.title === "Baillie O&#8217;Grady" ? title = "Baillie O'Grady - Freelance WordPress Developer" : title = `${title} - Baillie O'Grady`

  return (
    <Layout>
      <Helmet title={`${title}`} />
      {page.acf.page_builder_page.map((block, i) => {
        switch (block.__typename) {
          case "WordPressAcf_intro":
            return <Intro fields={block} title={page.title} key={block.id} />
          case "WordPressAcf_two_column":
            return <TwoColumn fields={block} key={block.id} />
          case "WordPressAcf_projects":
            return <Projects fields={block} key={block.id} />
          case "WordPressAcf_articles":
            return <Articles fields={block} key={block.id} />
          // case "WordPressAcf_videos":
          //   return <Videos fields={block} key={block.id} />
          default:
            break;
        }
      })}
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        page_builder_page {
          __typename
          ...Intro
          ...TwoColumn
          ...Projects
          ...Articles
        }
      }
    }
  }
`
