import React from 'react'
import "../../public/Css/Loading.css"
import  spinner  from '../../public/Image/spinner.gif'

function Loading() {
  return (
    <div className="loading">
    <img src={spinner} alt="loading" />
  </div>
  )
}

export default Loading