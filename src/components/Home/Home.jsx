import React, { useEffect, useState } from 'react'
import PageContainer from './../../PageContainer';
import "./Home.css"
import axios from 'axios';
import Courses from '../Cards/Cards';

import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';

const Home = () => {



  return (
    <>
    <PageContainer>
      <div className="home-container">
        <div className="home-part-one">
          <div className="home-part-one-left">
            <h1 className="main-heading"><span style={{color:"#F5AF15"}}>Proqramlaşdırmanı</span><br /> onlayn olaraq<br />bizdən öyrənin</h1>
            <button className="kurslar-btn">Kurslar <img src="/right-arrow.svg" width="24px" height="24px" style={{margin:"0"}} alt="" /></button>
          </div>

          <div className="home-part-one-right">
            <div><img src="/circles.png" alt="" /></div>
            <div><img src="/discs.png" alt="" /></div>
            <div><img src="/first.svg" width="400px" alt="" /></div>
          </div>
        </div>

        <div className="home-part-two">
          <div className="home-part-two-above">
            <div><h1 className="populyar-kurslar">Populyar kurslar</h1></div>
          </div>
            <Cards/>
          <div className="home-part-two-end">
              <Link id="butun-kurslar" to={`/courses`}> Bütün kurslar <img src="/right-arrow.svg" width="24px" height="24px" style={{margin:"0"}} alt="" /></Link>
            </div>
            
        </div>

        <div className="home-part-three">
          <div>
            <h1 style={{padding:"138px 0 20px 80px"}} className="populyar-kurslar">BakuDevs ilə istədiyiniz biliklərə sahib olun!</h1>
            <p style={{padding:"0 0 20px 80px",color:"black"}}>Nə üçün tədrisinizi məhz bizdə keçməlisiniz? Bunun üçün ən azı dörd səbəb var:</p>
          </div>

          <div className="home-part-three-middle">
            <div className="home-part-three-left">
              <div className="advantages">
              <div className="advantages-icon-background" style={{width:"60px", height:"60px", backgroundColor:"red", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src="/money-icon.png" alt="" />
              </div>
                <h1>Sərfəli qiymət</h1>
                <p>Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar sizin üçün tam açıq olacaq!</p>
              </div>

              <div className="advantages" style={{marginTop:"26px"}}>
              <div className="advantages-icon-background" style={{width:"60px", height:"60px", backgroundColor:"#64B7F4", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src="/video-icon.png" alt="" />
              </div>
                <h1>Video və Yazılı format</h1>
                <p>Bizim saytımızda siz dərslərə həm video formatında, həm də yazılı izah formatında rahat baxa bilərsiniz </p>
              </div>

              <div className="advantages">
              <div className="advantages-icon-background" style={{width:"60px", height:"60px", backgroundColor:"#46AB99", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src="/exercises-icon.png" alt="" />
              </div>
                <h1>Tapşırıqlar və Layihələr</h1>
                <p>Hər dərsin və kursun sonunda sizə tapşırıqlar və layihələr veriləcək. Siz onları yerinə yetirərək, praktik təcrübənizi artıracaqsınız və portfolionuzu yaratmış olacaqsınız</p>
              </div>

              <div className="advantages" style={{marginTop:"26px"}}>
              <div className="advantages-icon-background" style={{width:"60px", height:"60px", backgroundColor:"#FFAE01", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src="/certificate-icon.png" alt="" />
              </div>
                <h1>Sertifikat veririk</h1>
                <p>Siz bizim saytımızda hər hansı bir kursu bitirdikdən sonra, avtomatik olaraq BakuDevs sertifikatı əldə edəcəksiniz. Bu sertifikat sizin bilik və bacarıqlarınızı təsdiq edəcək</p>
              </div>
            </div>

            <div>
              <div style={{position:"relative", width:"496px"}}>
                <img style={{position:"absolute"}} src="/boy-with-glasses.png" alt="" />
                <img style={{position:"absolute"}} src="/boy-with-glasses-background.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
    </>
  )
}

export default Home