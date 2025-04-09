import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
export default function header() {
  return (
    <div className='flex justify-between items-center p-8 pl-30 pr-30'>
        <div className="logo">
            <h1 className='text-2xl font-bold '>My Logo</h1>
        </div>
        <ul>
            <li className='inline-block mx-4 text-[#4F5665] hover:text-[#F53855]'><Link  href="/">Home</Link ></li>
            <li className='inline-block mx-4 text-[#4F5665] hover:text-[#F53855]'><Link href="/about">About</Link></li>
            <li className='inline-block mx-4 text-[#4F5665] hover:text-[#F53855]'><Link href="/contact">Contact</Link></li>
            <li className='inline-block mx-4 text-[#4F5665] hover:text-[#F53855]'><Link href="/blog">Blog</Link></li>
            <li className='inline-block mx-4 text-[#4F5665] hover:text-[#F53855]'><Link href="/services">Services</Link></li>
        </ul>
        <div className="search-bar">
            <Button className='bg-white m-1 text-black hover:bg-[#F53855] hover:text-white rounded-full'>Sign In</Button>
            <Button variant="outline" className='border-[#F53855] text-[#F53855] m-1 rounded-full'>Sign Up</Button>
        </div>
    </div>
  )
}
