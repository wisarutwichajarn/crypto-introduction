import React from 'react'

function VIDEO() {
  return (
        <div className="bg-center bg-gradient-to-b from-yellow-200 to-yellow-300 p-4 pb-24">       
            <div className="text-center text-4xl cursor-pointer mt-8 transition-all 
                            hover:scale-110 active:scale-105 active:to-blue-700">
             Introduciton video     
            </div>

            <div className="video-container bg-center flex align-center justify-center mt-12">
              <iframe width="560" height="315" src="/src/video/AboutusBG.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                      className='rounded-xl transition-all  hover:rounded-3xl hover:scale-105
                                 shadow-custom-right-bottom filter hover:brightness-125'></iframe>
            </div>

            
            
        </div>
  )
}

export default VIDEO