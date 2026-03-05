import React, { useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";

function TicketCard({ticket,setInprogress,setSelectedTickets}) {
  const [isOpen,setOpen] = useState(false)
    console.log(ticket)
  return (
        <div className="card card-border w-full bg-base-100 max-w-md mx-auto shadow-md">
  <div className="card-body p-4">
    <div className="flex justify-between items-start">
      <h2 className="card-title text-lg">{ticket.title}</h2>
       <button disabled={isOpen}
  onClick={() => {
    setOpen(true)
    setInprogress(inProgress=>inProgress+1)
    setSelectedTickets(prev => [...prev, { id: ticket.id, title: ticket.title }])
  }}
  className="flex items-center gap-2 text-sm text-[#0B5E06] font-medium bg-[#B9F8CF] px-3 py-1 rounded-full"
>
  <span className="w-4 h-4 bg-[#02A53B] rounded-full"></span>
  {isOpen ? "Open" : "Closed"}
</button>
    </div>

    <p className="text-gray-600 text-sm ">
          {ticket.description}
    </p>

    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
      <div className="flex gap-3">
        <span>#{ticket.id}</span>
        <span className="text-red-500 font-medium">{ticket.priority}</span>
      </div>

      <div className="flex items-center gap-2">
        <span>John Smith</span>
        <div className='flex items-center gap-2'>
          <FaCalendarAlt className="w-4 h-4"/>
          <span>{ticket.createdAt}</span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default TicketCard
