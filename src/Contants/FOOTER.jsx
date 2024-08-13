import React  from 'react'
import { FaFacebook, FaLinkedin, FaMedium, FaGooglePlus } from 'react-icons/fa';





function FOOTER(){
  return (
    <div  className='mx-auto  p-16 bg-black bg-gradient-to-b from-yellow-700 to-black '>
       
            <div className=" mx-auto max-w-screen-2xl flex justify-center m-12  text-white border-white 
                            text-2xl pt-16 text-bold ">
                                <div className="flex justify-center ">
                                  <div className="bg-white border-l-2 "></div>

                                </div>

                <div className="m-6">
                  <h1 className='font-bold text-4xl text-white cursor-pointer drop-shadow-lg '>Contact</h1>
                  <div className=""></div>
                    <div className="mt-12 flex flex-col pt-2 gap-6">
                          <div className="flex">
                          <FaFacebook className="mr-4
                          " /> <a href="#" target="_blank" rel="noopener noreferrer" className='text-blue-700'>Facebook</a>
                          </div>
                          <div className="flex">
                          <FaLinkedin className="mr-4
                          " /> <a href="#" target="_blank" rel="noopener noreferrer" className='text-blue-500'>LinkedIn</a>
                          </div>
                          <div className="flex">
                          <FaMedium className="mr-4
                          " /> <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-500'>Medium</a>
                          </div>
                          <div className="flex">
                          <FaGooglePlus className="mr-4
                          " /> <a href="#" target="_blank" rel="noopener noreferrer" className='text-red-400'>Goolge+</a>
                          </div>
                    </div>
                </div>

            </div>
       
       
    </div>
  )
};

export default FOOTER