import React from 'react'
import PageContainer from './../../../PageContainer';
import "./ResetPasswordSecondStep.css"
import { Link } from 'react-router-dom';

export const ResetPasswordSecondStep = () => {
  return (
    <PageContainer>
      <div className="sign-in-container">
        <div className="daxilol-div">
          <h1>Şifrənin yenilənməsi</h1>
        </div>
        <div className="form">

        <div className="circle-shape"><img src="/circle-shape.png" alt="" /></div>
        <div className="star-shape"><img src="/star-shape.png" alt="" /></div>

        <div className="left-img">
              <img src="/man-wave.svg" alt="" />
        </div>
        
          <div className="sign">
        <div style={{zIndex:"-1", position:"absolute"}}><img src="/sign-bg.svg" alt="" /></div>
    
            <div style={{display:"flex"}}>
              <div className="logo-div mail">
              <img src="/mail-logo.svg" alt="" />
              </div><input type="text" name="" id="" placeholder='Email ünvanı' />
            </div>
            
            <div style={{display:"flex"}}>
              <div className="logo-div lock">
              <img src="/lock-logo.svg" alt="" />
              </div><input type="text" name="" id="" placeholder='Şifrə' />
            </div>

            <div style={{display:"flex"}}>
              <div className="logo-div lock">
              <img src="/lock-logo.svg" alt="" />
              </div><input type="text" name="" id="" placeholder='Şifrəni yenidən daxil edin' />
            </div>


            <div>
              <Link className="daxil-ol" to={`/signin`}>Daxil ol<img src="/right-arrow.svg" width="24px" height="24px" style={{margin:"0"}} alt="" /></Link>
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
