import React, { useState } from 'react'
import "./MemberAreaQebz.css"
import QebzID from './QebzID/QebzID';

const MemberAreaQebz = () => {
  const [state,setState]=useState(false)
  return (
    <div>
        <div className='receipt-div'>
          <div className='th'>
            <p>Qəbz ID</p>
            <p>Abunə tarixi</p>
            <p>Məbləğ</p>
          </div>

          <div className="tr" onClick={()=>{setState(state==false ? true : false)}}>
            <div className='receipt'><img src="/bi-receipt-icon.svg" alt="" /><p>000000001</p></div>
            <div className='receipt'><img src="" alt="" /><p>12.02.2022</p></div>
            <div className='receipt'><img src="" alt="" /><p>10 AZN</p></div>
          </div>
          {state && <QebzID/>}

          <div className="line"></div>

          <div className="tr" onClick={()=>{setState(state==false ? true : false)}}>
            <div className='receipt'><img src="/bi-receipt-icon.svg" alt="" /><p>000000001</p></div>
            <div className='receipt'><img src="" alt="" /><p>12.02.2022</p></div>
            <div className='receipt'><img src="" alt="" /><p>10 AZN</p></div>
          </div>
          {state && <QebzID/>}

          <div className="line"></div>

          <div className="tr" onClick={()=>{setState(state==false ? true : false)}}>
            <div className='receipt'><img src="/bi-receipt-icon.svg" alt="" /><p>000000001</p></div>
            <div className='receipt'><img src="" alt="" /><p>12.02.2022</p></div>
            <div className='receipt'><img src="" alt="" /><p>10 AZN</p></div>
          </div>
          {state && <QebzID/>}

          <div className="line"></div>

          <div className="tr" onClick={()=>{setState(state==false ? true : false)}}>
            <div className='receipt'><img src="/bi-receipt-icon.svg" alt="" /><p>000000001</p></div>
            <div className='receipt'><img src="" alt="" /><p>12.02.2022</p></div>
            <div className='receipt'><img src="" alt="" /><p>10 AZN</p></div>
          </div>
          {state && <QebzID/>}

        </div>
    </div>
  )
}

export default MemberAreaQebz