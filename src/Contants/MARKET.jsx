import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

// ลงทะเบียน components ที่ต้องการ
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'Auguest' , 'September' , 'October' , 'November' , 'December'],
  datasets: [
    { 
      textColor:'black',
      label: 'My First dataset',
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(125,210,192,0.9)',
      data: [65, 59, 80, 81, 56, 55, 40, 12, 93, 25, 23],
    },
  ],
};

const  MARKET = () =>  {

 


  return (
    <div className='mx-auto flex flex-col items-center bg-gradient-to-b from-yellow-700 to-yellow-800'>
      <div className="text-6xl mt-16 mb-12 cursor-pointer text-center">
          MARGET-CRYPTO-GRAPH 
          <hr className='mt-2 border-black'/>
      </div>
 
      <div className='mt-12 mb-16 w-full h-96 grid justify-center items-center '>
         <h1 className='text-3xl text-center font-bold mb-9'>Eample graph (1) </h1><hr />
        <Bar data={data} className='bg-white b-4  shadow-custom-right-bottom  
        transition-all hover:translate-x-2 hover:-translate-y-2 '/>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-6 p-4 ">
            <div className='mt-12  w-full h-96 grid justify-center items-center 
            transition-all hover:translate-x-2 hover:-translate-y-2'>
              <Bar data={data} className='bg-white b-4 '/>
            </div>
            <div className='mt-12  w-96 h-96 grid justify-center items-center 
            transition-all hover:translate-x-2 hover:-translate-y-2'>
              <Bar data={data} className='bg-white b-4 '/>
            </div>
            <div className='mt-12  w-full h-96 grid justify-center items-center 
            transition-all hover:translate-x-2 hover:-translate-y-2'>
              <Bar data={data} className='bg-white b-4 '/>
            </div>
           

      </div>
      <div className="bg-center pb-12 flex flex-col gap-12">

        <a href="#" className="bg-black text-white font-bold py-6 px-8 rounded-xl transition-all text-2xl
                                        hover:bg-white hover:text-black hover:translate-x-1 hover:-translate-y-1 duration-200
                                        active:-translate-x-0.5 active:translate-y-0.5   border-stone-950">
                                        more info  
                </a>
      </div>


 


    </div>

  )
}

export default MARKET