import React from 'react'
import { Link } from 'gatsby'

const Button = ({ text, link, classes }) => (
    <Link
        to={link}
        className={`${classes} white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib`}
    >
        {text}
    </Link>
)

export default Button