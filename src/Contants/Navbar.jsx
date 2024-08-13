import React, { useRef } from 'react'
// import { Link } from 'react-router-dom';
// import ABOUT_US from './ABOUT_US';
// import INFORMATION from './INFORMATION'; // ตรวจสอบเส้นทางการนำเข้าให้ถูกต้อง
// import FOOTER from './FOOTER'; // ตรวจสอบเส้นทางการนำเข้าให้ถูกต้อง


function Navbar() {

    // สร้างการอ้างอิงไปยังตำแหน่งที่ต้องการเลื่อนไป
//     const aboutRef = useRef(null);
//     const informationRef = useRef(null);
//     const contactRef = useRef(null);


//  // ฟังก์ชันสำหรับเลื่อนหน้าจอไปยังตำแหน่งที่กำหนด
//     const scrollToSection = (ref) => {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     };


  return (
        <div className="navbar bg-gradient-to-r from-slate-400/75 to-black/75 fixed top-0 left-0 w-full h-20 z-50   ">
                  {/* CONTAINER */}
            <div className=" flex justify-around mx-auto bg-cen h-20">
                  {/* LOGO AND TITLE */}
                  
                    

                <div className="flex navbar-logo items-center justify-center">
                    <img className="w-12 h-12 m-2 transition-transform hover:scale-125 filter hover:brightness-125" src="/src/photo/logo.png" alt="logo" />
                    <a href="#" className='text-white text-xl font-extrabold pl-3 transition-transform
                                            hover:scale-125 hover:text-yellow-600  active:text-white
                                            active:scale-110 '>
                                                MyCrypto</a>
                </div>
                <div className="flex items-center justify-center p-5 gap-10 " >
                                  {/* RESPONSIVE DESIGN */}
                    <button 
                    className="font-extrabold rounded-xl p-3 text-white transition-transform
                                            hover:-translate-y-1  hover:text-yellow-400 
                                            hover:scale-125 active:-translate-x-0.5 active:translate-y-0.5
                                            active:text-yellow-600 ">
                                                ABOUT US</button>
                    <button 
                    className="font-extrabold rounded-xl p-3 text-white transition-transform 
                                            hover:-translate-y-1  hover:text-yellow-400
                                            hover:scale-125 active:-translate-x-0.5 active:translate-y-0.5
                                            active:text-yellow-600 ">
                                                INFORMATION</button>
                    <button 
                    className="font-extrabold rounded-xl p-3 text-white transition-transform 
                                           hover:-translate-y-1  hover:text-yellow-400
                                            hover:scale-125 active:-translate-x-0.5 active:translate-y-0.5
                                             active:text-yellow-600 ">
                                                CONTACT</button>
                </div>
                <div className=" font-extrabold flex items-center justify-center ">
                <a to="/login" className='rounded-xl bg-white p-2.5 mr-3 transition-transform hover:scale-125 
                                    hover:text-blue-800 hover:rounded-2xl active:scale-110 active:text-yellow-300
                                     active:bg-black active:border-2'>
                                         LOG-IN
                </a>
                </div> 
                
            </div>
                {/* Sections to scroll to */}
                {/* <ABOUT_US ref={aboutRef} id="about" title="About Us" className="text-blue-800" />
                <INFORMATION ref={informationRef} id="information" title="Information" className="text-blue-800"/>
                <FOOTER ref={contactRef} id="contact" title="Contact" className="text-blue-800" /> */}
                  
        </div>
  )
}

export default Navbar