import React from 'react'
import { Header } from '../Header'
import Footer from '../Footer/Footer'

function Layout(props) {
    const { children } = props
  return (
    <div>
      <Header/>
        { children }
        <Footer date="2023"  BgImageURL='./assets/images/footerbg-min.png'/>
      
    </div>
  )
}

export default Layout
