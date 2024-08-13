import React  from 'react'

// ใช้ forwardRef เพื่อให้คอมโพเนนต์รับ ref และส่งไปยัง element ที่ต้องการ
function  ABOUT_US(){
  return (
    <div className="bg-center bg-gradient-to-r from-yellow-100  to-yellow-300 "> 
      <div className="relative overflow-hidden pt-24">
          <video src="/src/video/AboutusBG.mp4" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="/src/video/AboutusBG.mp4" type="video/mp4" />
              
          </video>
        <div className='flex flex-col justify-center items-center'>
       
        
            {/* ABOUT US */}
            <div className="relative z-1 flex flex-col items-center justify-center text-6xl font-black h-full ">
              <div  className="about_us text-white flex justify-center items-center cursor-pointer mt-12 transition-all hover:scale-105
                              active:scale-95 active:text-slate-100">
                              ABOUT US
              </div>
            </div>


            {/* DETAIL */}
            <div className='max-w-screen-lg relative z-1 mx-auto p-4 mb-36 mt-12 flex flex-col items-center justify-center font-semibold'>
              
                <h2 className="font-black flex justify-center text-2xl mb-4 cursor-pointer text-white">What is Cryptocurrency?</h2>
                <p className="text-lg cursor-pointer text-white">
                  Cryptocurrency is a digital or virtual currency that uses cryptographic techniques for security. It operates on blockchain technology, 
                  a decentralized system that ensures transparency and prevents tampering. Unlike traditional currencies, cryptocurrencies are not controlled by 
                  any central authority.Transactions are verified by a network of computers, making them secure and resistant to fraud. Popular examples include Bitcoin and Ethereum.
                </p>
            </div>

             <div className="button relative text-lg flex m-6 space-x-6 p-4">
                <a href="#" className="bg-white text-black font-bold py-2 px-4 rounded-xl transition-all 
                                      hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                      active:-translate-x-0.5 active:translate-y-0.5  active:bg-yellow-500 border-2 border-stone-950">
                                        more info</a>
                <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded-xl transition-all 
                                      hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 duration-200
                                      active:-translate-x-0.5 active:translate-y-0.5 active:text-yellow-700 active:bg-yellow-500 border-2 border-slate-100">
                                        another link</a>
             </div>

        </div>
      </div>
    </div>
  )
};

export default ABOUT_US