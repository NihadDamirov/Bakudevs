import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-container">
      <div style={{display:"flex", gap:"100px", margin:"76px 115px"}}>
        <div className="footer-bakudevs">
          <img src="/bakudevs-footer.png" alt="" />
          <p style={{fontSize:"18px",width:"260px", marginTop:"15px"}}>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        </div>

        <div className="footer-courses">
          
            <Link>Frontend</Link>
            <Link>Backend</Link>
            <Link>UI/UX</Link>
  
        </div>

        <div className="footer-navs">
            <Link to={"/"}>Əsas səhifə</Link>
            <Link to={"/course"}>Kurslar</Link>
            <Link to={"/about"}>Haqqımızda</Link>
            <Link to={"/contact"}>Əlaqə</Link>
        </div>

        <div>
          <p style={{fontSize:"18px", marginBottom:"28px"}}>Yeniliklərdən xəbərdar olmaq üçün<br /><Link className="signup" to={`/signup`}>Qeydiyyatdan keçin.</Link></p>
          <div style={{position:"relative", display:"flex", alignItems:"center", width:"390px"}}> 
            <div><input type="email" name="" id="footer-btn" placeholder="    Email"/></div>
            <div  style={{position:"absolute", right:"-1px"}}><button id="arrow-right-footer"><img src="/footer-arrow-right.png" alt="" /></button></div>
          </div>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-last">
        <div style={{margin:0}}>
          <p>© 2022 BakuDevs.net. Bütün hüquqlar qorunur</p>
        </div>

        <div style={{margin:"0"}}>
          <p>Site by JEDAİ</p>
        </div>
      </div>
    </div>
  )
}

export default Footer