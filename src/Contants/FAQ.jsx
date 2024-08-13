import React from 'react'

function FAQ() {
  return (
    <div className='bg-center bg-gradient-to-b from-yellow-600 to-yellow-700 p-4 pb-24 
                   items-center flex flex-col mx-auto '>
        <div className=" text-black text-6xl flex justify-center items-center cursor-pointer mt-8 
                           transition-all hover:scale-105 active:scale-95 active:text-slate-800  ">
                FAQ
        </div>
        <div className="mt-16 flex gap-20 max-w-screen-2xl mx-auto ">
          <div className="  bg-gradient-to-br from-slate-400 to-white shadow-custom-right-bottom-2  items-center space-x-4 p-8 inline-block rounded-2xl 
                  transition-all hover:translate-x-2 hover:-translate-y-2 cursor-pointer filter hover:brightness-110">
                <div className="flex items-center space-x-4 p-4">
                  <img src="https://cdn.pixabay.com/photo/2024/07/12/17/48/ai-generated-8890805_1280.png" alt=""
                    className='w-26 h-28 mr-3 mb-2 object-cover rounded-full transition-all filter hover:brightness-110 shadow-custom-right-bottom' />
                  <div className="title text-xl font-extrabold">What is XYZ Company?</div>
                </div> 
                <div className="border-t-2 border-gray-600 my-6 "></div>
              <div className="desc mb-8 ">XYZ Company is a leading provider of cutting-edge solutions in the information technology sector, 
                dedicated to empowering businesses with advanced tools and technologies designed to streamline operations and enhance
                 data security. Since our inception in [Year of Establishment], we have been at the forefront of IT innovation,
                  consistently delivering solutions that drive efficiency and foster growth for organizations across various industries.</div>
          </div>
          <div className=" bg-gradient-to-br from-slate-400 to-white shadow-custom-right-bottom-2  items-center space-x-4 p-8 inline-block rounded-2xl
          transition-all hover:translate-x-2 hover:-translate-y-2 cursor-pointer filter hover:brightness-110">
                <div className="flex items-center space-x-4 p-4">
                  <img src="https://cdn.pixabay.com/photo/2024/07/12/17/48/ai-generated-8890805_1280.png" alt=""
                    className='w-26 h-28  mr-3 mb-2 object-cover rounded-full transition-all filter hover:brightness-110 shadow-custom-right-bottom' />
                  <div className="title text-xl font-extrabold">What is XYZ Company?</div>
                </div>
                <div className="border-t-2 border-gray-600 my-6 "></div> 
              <div className="desc mb-8 ">XYZ Company is a leading provider of cutting-edge solutions in the information technology sector, 
                dedicated to empowering businesses with advanced tools and technologies designed to streamline operations and enhance
                 data security. Since our inception in [Year of Establishment], we have been at the forefront of IT innovation,
                  consistently delivering solutions that drive efficiency and foster growth for organizations across various industries.</div>
          </div>
          <div className=" bg-gradient-to-br from-slate-400 to-white shadow-custom-right-bottom-2  items-center space-x-4 p-8 inline-block rounded-2xl
          transition-all hover:translate-x-2 hover:-translate-y-2 cursor-pointer filter hover:brightness-110">
                 <div className="flex items-center space-x-4 p-4">
                  <img src="https://cdn.pixabay.com/photo/2024/07/12/17/48/ai-generated-8890805_1280.png" alt=""
                    className='w-26 h-28 mr-3 mb-2 object-cover rounded-full transition-all filter hover:brightness-110 shadow-custom-right-bottom' />
                  <div className="title text-xl font-extrabold ">What is XYZ Company?</div>
                </div>  
                <div className="border-t-2 border-gray-600 my-6 "></div>
              <div className="desc mb-8">XYZ Company is a leading provider of cutting-edge solutions in the information technology sector, 
                dedicated to empowering businesses with advanced tools and technologies designed to streamline operations and enhance
                 data security. Since our inception in [Year of Establishment], we have been at the forefront of IT innovation,
                  consistently delivering solutions that drive efficiency and foster growth for organizations across various industries.</div>
          </div>
          
        </div>


    </div>
    
  )
}

export default FAQ