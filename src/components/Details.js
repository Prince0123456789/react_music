import React from 'react'

export default function Details(props) {
  return (
    <>
    <h5>Title:"{props.title}"</h5>
    <h5>Artist:"{props.artist}"</h5>
    <img src={props.image_src} alt="" className='song_image'></img>
   </>
  )
}
