import React from 'react'
import { Button } from "@/components/ui/button"
export default function herosection() {
  return (
    <div className='grid grid-cols-2 p-8 pl-30 pr-30'>
        
        <div className='flex flex-col justify-content-between items-start'>
            <h1 className='text-5xl font-bold text-[#0B132A] mb-4 leading-18'>
                Want anything to be <br /> easy with LaslesVPN
            </h1>
            <p className='text-[#4F5665] mb-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum eligendi labore hic? Voluptatum est, iure veritatis commodi ad provident laborum unde quas eius inventore reprehenderit sapiente ipsam? Quisquam, itaque?</p>
            <Button className='p-6 bg-[#F53838] shadow-[0_25px_25px_#F5383859]'>Vamos Começar</Button>

        </div>

        <div className='flex justify-center items-center'>
            <img src="img1.png" alt="" />
        </div>
    </div>
  )
}
