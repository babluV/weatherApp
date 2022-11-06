import React from 'react'

function ShowTemp({text}) {
  return (
    <div className='textGrid'>
        <h2>Weather Details</h2> 
       {text ?
       <>
        <div className='DetailContainer'><span className='topic'>Description:</span> {text.description}</div>
        <div className='DetailContainer'><span className='topic'>Temp:</span>  {text.temp}</div>
        <div className='DetailContainer'><span className='topic'>Temp Max:</span> {text.temp_max}</div>
        <div className='DetailContainer'><span className='topic'>Temp Min:</span> {text.temp_min}</div>
        <div className='DetailContainer'><span className='topic'> Sunrise:</span> {text.sunrise}</div>
        <div className='DetailContainer'><span className='topic'> Sunset:</span> {text.sunset}</div>
        <div className='DetailContainer'><span className='topic'>Humidity:</span> {text.humidity}</div>
        <div className='DetailContainer'><span className='topic'>Country: </span>{text.country}</div>
        </> :
        <h2>Data not found!!</h2>
       }
</div>
    
  )
}

export default ShowTemp