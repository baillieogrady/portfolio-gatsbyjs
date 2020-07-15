import React from 'react'
import { graphql } from 'gatsby'

// components
import Button from '../Button'

// staticquery components
import ProjectsPosts from './static/ProjectsPosts'

export default class Projects extends React.Component {
    render() {
        const { fields } = this.props

        return (
            <section className="projects pv4 pv5-ns bg-dark-gray white">
                <div className="mw8 center ph3">
                    <div className="mb3 mb4-ns">
                        <h2 dangerouslySetInnerHTML={{ __html: fields.heading }} />
                    </div>
                    <ProjectsPosts />
                    <Button text={fields.button.button_text} link={fields.button.button_link} classes="bg-blue" />
                </div>
            </section>

        )
    }
}

export const pageQuery = graphql`
  fragment Projects on WordPressAcf_projects {
    id
    heading
    button {
      button_text
      button_link
    }
  }
`
