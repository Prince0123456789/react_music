import React from 'react'

export default function Control(props) {
  return (
    <div className='control_button'>
        <button onClick={props.prev} className='skip'><img className='play_pause' src="./images/left.svg" alt=""/></button>
        <button className='play_button' onClick={() => props.setIsPlaying(!props.isPlaying)}>{!props.isPlaying ? <img className='play_pause' src="./images/play.svg" alt=""/> : <img className='play_pause' src="./images/pause.svg" alt=""/>}</button>
        
        <button onClick={props.next} className='skip'><img className='play_pause' src="./images/right.svg" alt=""/></button>
    </div>
  )
}
