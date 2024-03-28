import React from 'react'
import PageContainer from './../../PageContainer';
import "./About.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
const About = () => {
  return (
    <>
    <PageContainer>
    <div style={{marginTop:"30px"}}>
      <div>
        <Breadcrumbs title="Haqqımızda" mainpage="Əsas səhifə" item="●" currentpage="Haqqımızda" />

        <div style={{display:"flex", width:"1210px", marginTop:"100px", alignItems:"center"}}>
          <div>
            <img src="/e-learning.jpg" alt="" />
          </div>

          <div style={{width:"553px"}}>
            <h1 style={{fontFamily:"Lora"}}>BakuDevs haqqında<br />məlumat</h1>
            <p style={{color:"#939393"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue morbi. Odio maecenas dolor, hac sodales non donec. Felis, non venenatis massa tincidunt massa quis libero in odio. Sapien, quis a viverra odio orci. Pretium molestie blandit faucibus eu, placerat sagittis, odio duis molestie. Sagittis, pretium, mi, faucibus lectus posuere pharetra amet, in.</p>
          </div>
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

export default About