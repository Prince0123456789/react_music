
import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Player from './components/Player';



function App() {
  
  const [songs_details] =  useState([
    {
      title:'Mehbooba-KGF',
      artist:'Ravi Basrur',
      song_src:'./songs/Mehbooba.mp3',
      image_src:'./images/mehbooba.jpg'
    },
    {
      title:'Arabic Kuthu',
      artist:'Anirudh',
      song_src:'./songs/Arabic Kuthu.mp3',
      image_src:'./images/arabic kuthu.jpg'
    }
  ])
    
  return (
    <>
    <Navbar title="Navigation"/>
    <div className='App'>
    
    
    
    <Player songs_details={songs_details}/>
    </div>
    </>
  );
}

export default App;
