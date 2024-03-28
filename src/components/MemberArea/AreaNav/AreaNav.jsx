import React, { useState } from 'react'
import MemberAreaProfil from '../MemberAreaProfil/MemberAreaProfil'
import Abune from '../MemberAreaAbune/MemberAreaAbune'
import "./AreaNav.css"
import MemberAreaQebz from '../MemberAreaQebz/MemberAreaQebz'
import MemberAreaIstek from '../MemberAreaIstek/MemberAreaIstek'
import MemberAreaCixis from '../MemberAreaCixis/MemberAreaCixis'
import PageContainer from './../../../PageContainer';

const AreaNav = () => {
  const [state,setState] = useState({
    profil:true,
    abune:false,
    qebzler:false,
    istek:false,
    cixis:false,
  })

  const [active,setActive]=useState("profil")
//   function handleProfil(){
//     setState((prevState)=>{ console.log(prevState); 
//       return{
//         ...prevState,
//         profil:true,
//         abune:false,
//         qebzler:false,
        
//       }
//     })
//   }
// function handleAbune(){
//   setState((prevState)=>{
//     return{
//       ...prevState,
//       profil:false,
//       abune:true,
//       qebzler:false,
//     }
//   })
// }
// function handleQebzler(){
//   setState((prevState)=>{
//     return{
//       ...prevState,
//       profil:false,
//       abune:false,
//       qebzler:true,
//     }
//   })
// }


// function handleStateChange(newState) {
//   setState((prevState) => ({
//     ...prevState,
//     profil: newState === 'profil',
//     abune: newState === 'abune',
//     qebzler: newState === 'qebzler',
//   }));
// }

// // Usage
// function handleProfil() {
//   handleStateChange('profil');
// }

// function handleAbune() {
//   handleStateChange('abune');
// }

// function handleQebzler() {
//   handleStateChange('qebzler');
// }

  return (
    <PageContainer>
    <div className='area'>
      <div className="area-left">
          <div className='private-office-div'>
            <p className='private-office'>Şəxsi kabinet</p>
          </div>
          <ul>
            
              <li className={`${state.profil ? "active" : ""}`} onClick={()=>setState({profil:true})}><img src="profile-icon.svg" alt="" /> Profil</li>
              <li className={`${state.abune ? "active" : ""}`} onClick={()=>setState({abune:true})}><img src="activate-subscriptions-outlined.svg" alt="" /> Abunəlik</li>
              <li className={`${state.qebzler ? "active" : ""}`} onClick={()=>setState({qebzler:true})}><img src="receipt-icon.svg" alt="" />Qəbzlər</li>
              <li className={`${state.istek ? "active" : ""}`} onClick={()=>setState({istek:true})}><img src="heart-icon(2).svg" alt="" /> İstək siyahısı</li>
              <li className={`${state.cixis ? "active" :"  "}`} onClick={()=>setState({cixis:true})}><img src="exit-icon.svg" alt="" /> Çıxış</li>
          </ul> 

       </div>
        <div className='area-right'>
            {state.profil && <MemberAreaProfil />}
            {state.abune && <Abune />}
            {state.qebzler && <MemberAreaQebz/>}
            {state.istek && <MemberAreaIstek/>}
            {state.cixis && <MemberAreaCixis/>}
        </div>
    </div>
    </PageContainer>
  )
}

export default AreaNav