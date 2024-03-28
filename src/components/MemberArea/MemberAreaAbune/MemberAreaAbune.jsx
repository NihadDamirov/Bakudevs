import React, { useState } from 'react'
import "./MemberAreaAbune.css"
import GetAbune from './GetAbune/GetAbune'

const MemberAreaAbune = () => {
  const [abune,setAbune] = useState(false)
  return (
    <div style={{display:"flex", gap:"130px"}}>
      <div style={{display:"flex",flexDirection:"column"}}>
        <input type="text" placeholder='Siz abunə deyilsiniz.'/>
        <div style={{display:"flex", alignItems:'center', gap:"10px", marginTop:"29px"}}><img src="/info-icon.svg" alt="" /><p>Aylıq abunə haqqı 10 AZN təşkil edir.</p></div>
        <button className='subscribe'>Abunə ol <img src="/right-arrow.svg" width="24px" height="24px" style={{margin:"0"}} alt="" /></button>
      </div>

      <div style={{display:"flex",flexDirection:"column", gap:"21px"}}>
        <div style={{display:"flex", alignItems:'center', gap:"10px", marginLeft:"0"}}><img src="/info-icon.svg" alt="" /><p>Sizin abunəliyiniz mövcuddur.</p></div>
        <div style={{display:"flex", alignItems:'center', gap:"10px"}}><img src="/warning-icon.svg" alt="" /><p>15.03.2022 tarixində abunəliyiniz bitir.</p></div>
        <button className='refresh' onClick={()=>{setAbune(!abune)}}>Yenilə <img src="/right-arrow.svg" width="24px" height="24px" style={{margin:"0"}} alt="" /></button>
        {abune && <GetAbune/>}
      </div>
    </div>
  )
}

export default MemberAreaAbune