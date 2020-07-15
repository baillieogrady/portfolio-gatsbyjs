import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div className="mw8 ph3 center mb4 mb5-ns tracked f6 flex">
      {previousPagePath && (
        <div className="navbar-item mr2">
          <Link to={previousPagePath} rel="prev" className="bg-dark-gray white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib ttu">
            Previous
          </Link>
        </div>
      )}
      {nextPagePath && (
        <div className="navbar-item">
          <Link to={nextPagePath} rel="next" className="bg-dark-gray white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib ttu">
            Next
          </Link>
        </div>
      )}
    </div>
  )
}

export default Pagination
