import React from 'react'

import Header from './Header'
import Footer from './Footer'
import '../scss/all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-column min-vh-100" role="document">
    <Header>
      {children}
    </Header>
    <main className="pt4 pt5-ns flex-auto">
      {children}
    </main>
    <Footer />
  </div>
)

export default TemplateWrapper