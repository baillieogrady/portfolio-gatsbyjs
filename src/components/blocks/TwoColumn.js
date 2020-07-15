import React from 'react'
import { graphql } from 'gatsby'
import Form from '../Form'


export default class TwoColumn extends React.Component {
    render() {
        const { fields } = this.props

        return (
            <section className="mb4 mb5-ns">
                <div className="mw8 center ph3">
                    <div className="flex justify-between flex-wrap">
                        {fields.columns.map((column, i) => (
                            column.form ? <div className={`w-100  w-50-m w-50-l ${i === 0 ? 'pr3-ns' : 'pl3-ns'}`} key={column.content_wysiwyg.wysiwyg} ><Form /></div> :
                                <div key={column.content_wysiwyg.wysiwyg} className={`w-100  w-50-m w-50-l ${i === 0 ? 'pr3-ns' : 'pl3-ns'}`} dangerouslySetInnerHTML={{ __html: column.content_wysiwyg.wysiwyg }} />
                        ))}
                    </div>
                </div>
            </section>

        )
    }
}

export const pageQuery = graphql`
  fragment TwoColumn on WordPressAcf_two_column {
    id
    columns {
        form
        content_wysiwyg {
            wysiwyg
        }
    }
  }
`
