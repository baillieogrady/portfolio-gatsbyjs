import React from 'react'
import { graphql } from 'gatsby'
import Button from '../Button'

// components
import ArticlesPosts from './static/ArticlesPosts'

export default class Articles extends React.Component {
  render() {
    const { fields } = this.props

    return (
      <section className="articles pt4 pt5-ns">
        <div className="mw8 center ph3">
          <div className="mb3 mb4-ns">
            <h2 dangerouslySetInnerHTML={{ __html: fields.heading }} />
          </div>
          <ArticlesPosts />
          <div className="mv4 mv5-ns">
              <Button text="VIEW MORE" link="/blog" classes="bg-blue" />
          </div>
        </div>
      </section>

    )
  }
}

export const pageQuery = graphql`
  fragment Articles on WordPressAcf_articles {
    id
    heading
  }
`
