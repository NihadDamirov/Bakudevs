import React from 'react'
import "./Course.css"
import PageContainer from '../../PageContainer';
import Cards from '../Cards/Cards';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Course = () => {
  return (
    <>
    <PageContainer>
          <Breadcrumbs title="Kurslar" mainpage="Əsas səhifə" item="●" currentpage="Kurslar"/>
        <div style={{margin:"100px 0 100px 0"}}>
          <Cards/>
        </div>
    </PageContainer>
    </>
  )
}

export default Course