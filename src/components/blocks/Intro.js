import React from 'react'
import { graphql } from 'gatsby'

export default class Intro extends React.Component {

  render() {
    const { title, fields } = this.props;

    return (
      <section className="mb4 mb5-ns">
        <div className="mw8 center ph3 cf">
          <h1 dangerouslySetInnerHTML={{ __html: title }} className="ttu" />
          <div className="fl w-100 w-70-ns">
            <div dangerouslySetInnerHTML={{ __html: fields.wysiwyg }} />
            {fields.button.button_link.length && fields.button.button_text.length ?
              <a href={fields.button.button_link} target="_blank" className="white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib mt4 mt5-ns bg-red">{fields.button.button_text}</a>
              : null
            }
          </div>
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  fragment Intro on WordPressAcf_intro {
    id
    wysiwyg
    button {
      button_text
      button_link
    }
  }
`