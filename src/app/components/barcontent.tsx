import React from 'react'
import { FaUser } from "react-icons/fa";

export default function Barcontent() {
  return (
    <div className='grid grid-cols-3 p-8 pl-30 pr-30 shadow-[0px_8px_34px_rgba(13,16,37,0.1)]'>
         <div className="flex items-center justify-center">
            <div className='elipse bg-[#FFECEC] w-15 h-15 rounded-full flex justify-center items-center mr-8'>
               <FaUser className='text-[#f53838]' />
            </div>
            <div>
                <h1 className='text-[#0B132A] text-[20px] font-bold'>90+</h1>
                <p className='text-[#4F5665]'>users</p>
            </div>
         </div>
         <div className="flex items-center justify-center">
            <div className='elipse bg-[#FFECEC] w-15 h-15 rounded-full flex justify-center items-center mr-8'>
               <FaUser className='text-[#f53838]' />
            </div>
            <div>
                <h1 className='text-[#0B132A] text-[20px] font-bold'>90+</h1>
                <p className='text-[#4F5665]'>users</p>
            </div>
         </div>
         <div className="flex items-center justify-center">
            <div className='elipse bg-[#FFECEC] w-15 h-15 rounded-full flex justify-center items-center mr-8'>
               <FaUser className='text-[#f53838]' />
            </div>
            <div>
                <h1 className='text-[#0B132A] text-[20px] font-bold'>90+</h1>
                <p className='text-[#4F5665]'>users</p>
            </div>
         </div>
    </div>
  )
}
