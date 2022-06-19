import React,{ useEffect, useRef, useState} from 'react'
import Control from './Control';
import Details from './Details'

export default function Player(props) {
  
  

  const [currentSong,nextSong]=useState(0)
 
  const next = () => {
    if(currentSong<props.songs_details.length-1)
    nextSong(currentSong+1)
    else
    nextSong(currentSong)
  }

  const prev = () => {
    if(currentSong<props.songs_details.length-1)
    nextSong(currentSong)
    else
    nextSong(currentSong-1)
  }
  const audio_Element = useRef(null)
  const [isPlaying,setIsPlaying]=useState(false)

  useEffect(() => {
    if(isPlaying){
      audio_Element.current.play()
    } else {
      audio_Element.current.pause()
    }
    
  })
   return (
    <>
    <div className='player'>
    <h4>Playing Song</h4>
      <Details
      title={props.songs_details[currentSong].title}
      artist={props.songs_details[currentSong].artist}
      
      image_src={props.songs_details[currentSong].image_src}
      
      />
      <Control
      next={next}
      prev={prev}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      />
       <audio src={props.songs_details[currentSong].song_src} ref={audio_Element} controls className='myaudio'></audio>
    
      <div className='next_song_deatils'>
        <p>Next Song: 
            <span>{props.songs_details[currentSong].title}</span><br/><br/>
        </p>
    </div>
    </div>
    </>
  )
}
