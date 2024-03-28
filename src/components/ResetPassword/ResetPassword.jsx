import React from 'react'
import PageContainer from '../../PageContainer'
import "./ResetPassword.css"
import { Link } from 'react-router-dom'

 const ResetPassword = () => {
  return (
    <PageContainer>
      <div className="sign-up-container">
        <div className="reset-password">
          <h1>Şifrənin yenilənməsi</h1>
        </div>
        <div className="form">

        <div className="circle-shape"><img src="/circle-shape.png" alt="" /></div>
        <div className="star-shape"><img src="/star-shape.png" alt="" /></div>

        <div className="left-img">
              <img src="/man-wave.svg" alt="" />
        </div>
        
          <div className="sign">
        <div style={{zIndex:"-1", position:"absolute"}}><img src="/sign-bg.svg" width="419px" height="461px" alt="" /></div>
    
            <p style={{color:"black", marginLeft:"46px",fontWeight:"bold"}}>Email</p>
            <div style={{display:"flex"}}>
              <div className="logo-div mail">
              <img src="/mail-logo.svg" alt="" />
              </div><input type="text" name="" id="" placeholder='Email ünvanı' />
            </div>

            <div>
              <Link className="daxil-ol" to={`/resetpasswordsecondstep`}>Şifrəni yenilə<img src="/right-arrow.svg" width="24px" height="24px" style={{margin:"0"}} alt="" /></Link>
            </div>

          </div>
            <div className="right-img">
              <img src="/girl-using-laptop.svg" alt="" />
            </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default ResetPassword