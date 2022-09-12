import React from 'react'
import "./loading.css"

export function Loading({ show }) {
  if (!show) return null
  return (
    <div className='loading'>
      <div className="spinner-grow text-primary loadingright" role="status" style={{width:"3rem",height:"3rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-border text-primary" role="status" style={{width:"3rem",height:"3rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>

  )
}

