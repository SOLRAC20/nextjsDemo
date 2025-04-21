import React from 'react'
import { BellRing, Check } from "lucide-react"
import CardPlan from './cardPlan'

const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]
  
export default function SecondSection() {
  return (
    <div className='flex justify-center items-center flex-wrap gap-8 p-8 pl-30 pr-30'>
        <CardPlan/>
        <CardPlan/>
        <CardPlan/>
    </div>
  )
}
