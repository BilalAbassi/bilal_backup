import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {Helmet} from "react-helmet";




const Layout = ({children,title,des,keywords}) => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
                <title>{title}</title>
  <meta name="description" content={des} />
  <meta name="keywords" content={keywords} />
      </Helmet>
      <Header/>


      <main className=' bg-slate-200 min-h-screen'> {children}</main>

      <Footer/>
      </div>
  )
}
Layout.defaultProps = {
  title:"ecommerce store",
  des :"web store",
  keywords:"ecommerce store, web store, "
}

export default Layout