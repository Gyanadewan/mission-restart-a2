import React from 'react'
import TicketCard from './TicketCard'

function TicketsCard({tickets,setInprogress,setSelectedTickets}) {
  
  return (
    <div >
      <h2 className='text-2xl font-semibold my-2 text-[#34485A]'>Customer Tickets</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
          {
          tickets.map(ticket => <TicketCard setSelectedTickets={setSelectedTickets}  setInprogress={setInprogress} ticket={ticket}></TicketCard>)
          }
           
    </div>
    </div>
    
  )
}

export default TicketsCard

