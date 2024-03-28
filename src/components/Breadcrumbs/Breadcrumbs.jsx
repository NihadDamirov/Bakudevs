import React from 'react'
import "./Breadcrumbs.css"
const Breadcrumbs = ({title,page,item,mainpage,currentpage}) => {
  return (
    <div>
        <div className="about-bg">
        <h1 style={{textAlign:"center"}}  className="breadcrumbs-heading">{title}</h1>
        <div style={{display:"flex", width:"250px", gap:"15px",marginTop:"15px"}}>
        <p>{mainpage}</p>
        <p style={{}}>{item}</p>
        <p>{currentpage}</p>
        </div>
        <div style={{width:"1440px", height:"150px", position:"absolute", backgroundColor:"#008D96", opacity:"60%"}}></div>
        </div>
    </div>
  )
}

export default Breadcrumbs