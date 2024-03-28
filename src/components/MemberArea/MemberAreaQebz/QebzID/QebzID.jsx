import React, { useEffect, useState } from 'react'
import "./QebzID.css"
import axios from 'axios'

const receipt_url=`http://localhost:3000/receipts`
const QebzID = () => {
  const [state,setState]=useState(true)



  return (
    <>
    { state && <div className='receipt-container'>
      <button className='exit-btn' onClick={()=>{setState(false)}}><img src="/close-btn.svg" alt="" /></button>
      
        <div className='receipt-row'>
          <p>Qebz ID:</p>
          <p>000000001</p>
        </div>
        
        <div className="line-two"></div>

        <div className='receipt-row'>
          <p>Abunə tarixi:</p>
          <p>000000001</p>
        </div>

        <div className="line-two"></div>

        <div className='receipt-row'>
          <p>Məbləğ:</p>
          <p>000000001</p>
        </div>

        <div className="line-two"></div>

        <div className='paid-div'><img src="/paid.svg" alt="" /></div>
    </div>
  }
  </>
  )
}

export default QebzID