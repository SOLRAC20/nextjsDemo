import React from 'react'
import { Button } from "@/components/ui/button"
import Barcontent from './barcontent'
import { FaCheckCircle } from "react-icons/fa"
export default function herosection() {
  return (
    <div className='pl-30 pr-30'>
        <div className='grid grid-cols-2 mb-30'>
        <div className='flex flex-col justify-content-between items-start'>
            <h1 className='text-5xl font-bold text-[#0B132A] mb-4 leading-18'>
                Want anything to be <br /> easy with LaslesVPN
            </h1>
            <p className='text-[#4F5665] text-[20px] mb-15'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <Button className='p-6 bg-[#F53838] shadow-[0_25px_25px_#F5383859]'>Vamos Começar</Button>

        </div>

        <div className='flex justify-center items-center'>
            <img src="img1.png" alt="" /> 
        </div>
        </div>
        <div className='mb-50'>
            <Barcontent></Barcontent>
        </div>
        <div className='grid grid-cols-2 mb-30'>
        <div className='flex justify-center items-center'>
            <img src="img2.png" alt="" /> 
        </div>

        <div className='flex flex-col justify-content-between items-start'>
            <h1 className='text-5xl font-bold text-[#0B132A] mb-4 leading-18'>
            We Provide Many <br /> Features You Can Use
                 
            </h1>
            <p className='text-[#4F5665] text-[20px] mb-15'>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <ul>
                <li className='text-[#4F5665] text-[20px] flex items-center mb-2'><FaCheckCircle className='text-[#2FAB73] mr-2' />Powerfull online protection.</li>
                <li className='text-[#4F5665] text-[20px] flex items-center mb-2'><FaCheckCircle className='text-[#2FAB73] mr-2' />Internet without borders.</li>
                <li className='text-[#4F5665] text-[20px] flex items-center mb-2'><FaCheckCircle className='text-[#2FAB73] mr-2' />Supercharged VPN.</li>
                <li className='text-[#4F5665] text-[20px] flex items-center mb-2'><FaCheckCircle className='text-[#2FAB73] mr-2' />No specific time limits.</li>
            </ul>

        </div>

        </div>
    </div>
    
  )
}
