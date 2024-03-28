import React, { useReducer, useState } from 'react'
import "./Menu.css"
import Frontend from '../Frontend/Frontend'
import Backend from '../Backend/Backend'
import UI from './../UI/UI';

const reducer =(state,action)=>{
  switch (action.type) {
    case "frontend":
      return {...state, frontend:true, backend:false, ui:false}
    case "backend":
      return {...state, backend:true, frontend:false, ui:false}
    case "ui":
      return {...state, ui:true, frontend:false, backend:false}
    default:
      break;
  }
}

const Menu = () => {
    const [active,setActive]=useState(true)
    // const [state,setState]=useState(false)
    const [state, dispatch] = useReducer(reducer, { frontend:true, backend:false, ui:false });
    return (
    <>
    { active && <div className='menu-container'>
        
        <div className='menu-right'>
        <button className='close-menu' onClick={()=>{setActive(false)}}><img src="/menu-close.svg" alt="" /></button>
        <ul className='nav-ul'>
            <li className='nav' onClick={()=>{dispatch({type:"frontend"})}}>Frontend</li>
            <li className='nav' onClick={()=>{dispatch({type:"backend"})}}>Backend</li>
            <li className='nav' onClick={()=>{dispatch({type:"ui"})}}>UI/UX</li>
        </ul>
        </div>


        <div className='menu-left'>
          {state.frontend && <Frontend/>}
          {state.backend && <Backend/>}
          {state.ui && <UI/>}
        </div>
    </div>}
    </>
  )
}

export default Menu