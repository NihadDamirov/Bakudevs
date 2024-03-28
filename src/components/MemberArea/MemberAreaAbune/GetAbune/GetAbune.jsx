import React, { useState } from 'react'
import "./GetAbune.css"
const GetAbune = () => {
    const [state,setState]=useState(true)
  return (
    <>
    { state && <div className='abune-container'>
      <div style={{marginBottom:"49px"}}>
        <button className='close-abune' onClick={()=>{setState(false)}}><img src="/close-btn.svg" alt="" /></button>
        <p className='main-paragraph'>Sizin abunəliyiniz 15.03.2022 tarixində bitir. Abunəliyinizi uzatmaq istədiyiniz tarixi seçin</p>
      </div>

        <div className='radio-wrapper'>
              <input type="radio" className='input-radio' name="" id="" />
              <p className='amount'>Məbləğ: 10 AZN</p>
        </div>

        <div className="line-abune"></div>

        <div className='radio-wrapper'>
              <input type="radio" className='input-radio' name="" id="" />
              <p className='amount'>Məbləğ: 20 AZN</p>
        </div>

        <div className="line-abune"></div>

        <div className='radio-wrapper'>
              <input type="radio" className='input-radio' name="" id="" />
              <p className='amount'>Məbləğ: 30 AZN</p>
        </div>

        <div className="line-abune"></div>

        <button className='refresh'>Yenilə <img src="/right-arrow.svg" width="24px" height="24px" style={{margin:"0"}} alt="" /></button>
        
    </div>
    }
    </>
  )
}

export default GetAbune