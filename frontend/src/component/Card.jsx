

function Card({songData}) {
  return (
    <div className=' h-40 w-40 flex flex-col items-center justify-center rounded-2xl text-white'>
      <div>
       <img  className='h-30 w-30 rounded-2xl' src={songData.coverImage} alt="" />
      </div>
     <h1 className='truncate w-full px-2'>{songData.title} </h1>
     </div>
  )
}

export default Card 