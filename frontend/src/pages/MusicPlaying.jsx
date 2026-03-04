import React from 'react';
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx';
import Card from '../component/Card.jsx';

function MusicPlaying() {
  return (
    <div className='flex flex-col bg-black '>
      <Header />
     <div className=' items-center grid grid-cols-2 gap-5 pt-10 pl-7'>
       <Card />
       <Card />
        <Card />
         <Card />
          <Card />
           <Card />
           <Card />
          <Card />
           <Card />
           <Card />
          <Card />
           <Card />
     </div>
      <Footer />
    </div>
  )
}

export default MusicPlaying