import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

const Header = () => {
  const [menu,setMenu]=useState(false)
  return (
    <div className="header-container">
      <div>
        <Link to={`/`}><img src="/bakudevs-logo.svg" alt="" className="baku-devs" /></Link>
      </div>

      <div className="kurslar-menu-div">
        <img src="/jam_menu.svg" alt="" />
        <a href="#" onClick={()=>{setMenu(!menu)}}>Kurslar</a>
        {menu && <Menu/>}
      </div>

      <div className="istek-siyahisi-div">
        <img src="/heart-icons-header.svg" alt="" />
        <Link to={`/areanav`}>istək siyahısı</Link>
      </div>

      <div style={{display:"flex", gap:"11px"}}>
      <div className="daxil-ol-div">
        <Link className="login" to={`/signin`}><div><img src="/daxil-ol-vector.svg" alt="" /></div>Daxil ol</Link>
      </div>  
      <div className="qeydiyyatdan-kec-div">
        <Link className="qeydiyyatdan-kec-btn" to={`/signup`}><div><img src="/qeydiyyatdan-kec-vector.svg" alt="" /></div>Qeydiyyatdan keç</Link>
      </div>
      </div>
    </div>
  )
}

export default Header