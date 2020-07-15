import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressMenusMenusItems {
          edges {
            node {
              items {
                url
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header className="w-100 f7">
        c
      </header>
    )}
  />
)

export default Header

// import React from 'react'
// import { Link } from 'gatsby'

// import Menu from './Menu'
// import MenuItems from './MenuItems'

// class Header extends React.Component {

//     state = { showMenu: false, shadow: false }

//     toggleMenu = () => {
//         this.setState({
//             showMenu: !this.state.showMenu
//         })
//     }

//     toggleShadow = () => {
//         let position = window.pageYOffset;
//         if (position <= 20) {
//             this.setState({
//                 shadow: false
//             })
//         } else {
//             this.setState({
//                 shadow: true
//             })
//         }
//     }

//     componentDidMount = () => {
//         window.addEventListener('scroll', this.toggleShadow);
//     }

//     render() {
//         const menuActive = this.state.showMenu ? 'active' : '';
//         const burgerActive = this.state.showMenu ? 'active' : '';
//         const shadowActive = this.state.shadow ? 'shadow-custom' : '';

//         return (
//             <header className={`header w-100 top-0 z-4 sticky ${shadowActive}`}>
//                 <div className="mw8 center ph3 pv3 flex justify-between items-center">
//                     <Link to="/" className="header__logo near-black no-underline ttu f5 b lh-solid logo">
//                         BAILLIE O'GRADY
//                     </Link>
//                     <Menu toggle={menuActive}>
//                         <MenuItems />
//                     </Menu>
//                     <div className={`burger ${burgerActive}`} onClick={this.toggleMenu}>
//                         <div className="burger__line"></div>
//                         <div className="burger__line"></div>
//                         <div className="burger__line"></div>
//                     </div>
//                 </div>
//             </header>
//         )
//     }
// }

// export default Header