// import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import ModalVideo from 'react-modal-video'

// export default class Videos extends React.Component {
    
//   constructor () {
//     super()
//     this.state = {
//       isOpen: false
//     }
//     this.openModal = this.openModal.bind(this)
//   }
 
//   openModal (e) {
//     e.preventDefault();
//     this.setState({isOpen: true})
//   }
//     render() {
//         const { fields } = this.props

//         return (
//             <section className="pv4 pv5-ns bg-dark-gray white">
//                 <div className="mw8 center ph3">
//                     <div className="mb3 mb4-ns">
//                         <h2 dangerouslySetInnerHTML={{ __html: fields.heading }} />
//                     </div>
//                     <div className="flex-ns justify-between flex-wrap">
//                         {fields.columns.map((edge, i) => (
//                             <article className={`w-100 w-50-m w-50-l pb4 pb5-ns ${i === 0 ? 'pr3-ns' : 'pl3-ns'}`} key={edge.heading}>
//                                 <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={edge.url} onClose={() => this.setState({isOpen: false})} />
//                                 <div className="relative">
//                                     <Img fluid={edge.image.localFile.childImageSharp.fluid}/>
//                                     <a href="#" onClick={this.openModal} className="box-shadow-none w3 h3 absolute bg-dark-gray br-100 flex justify-center items-center hover-bg-blue" style={{top:"50%", left: "50%", transform: "translateX(-50%) translateY(-50%)"}}>
//                                         <svg aria-hidden="true" focusable="true" data-prefix="fas" data-icon="play" class="h1 w1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
//                                     </a>
//                                 </div>
//                                 <h3 className="projects__heading mv3">
//                                     {edge.heading}
//                                 </h3>

//                             </article>
//                         ))}
//                     </div>
//                     <a href={fields.button.button_link} target="_blank" className="bg-red white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib">{fields.button.button_text}</a>
//                 </div>
//             </section>
//         )
//     }
// }

// export const pageQuery = graphql`
//   fragment Videos on WordPressAcf_videos {
//     id
//     heading
//     columns {
//         heading
//         image {
//             localFile {
//                 childImageSharp {
//                     fluid(maxWidth: 480, maxHeight: 270) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//         }
//         url
//     }
//     button {
//       button_text
//       button_link
//     }
//   }
// `