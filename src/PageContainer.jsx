import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';


const PageContainer = ({children}) => {
  return (
    <>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default PageContainer