import React from 'react'
import "./UI.css"
import { Link } from 'react-router-dom'
const UI = () => {
  return (
    <div className='ui-part'>
      <Link href="">Photoshop</Link>
      <Link href="">Adobe Illustrator</Link>
      <Link href="">Canva</Link>
      <Link href="">Figma</Link>
    </div>
  )
}

export default UI