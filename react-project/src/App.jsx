import { useEffect, useState } from 'react';
import BannerCard from './Components/BannerCard'
import Navbar from './Components/Navbar'
import TicketsCard from './Components/Cards/TicketsCard';



function App() {
  const [tickets,setTickets]= useState([])
  useEffect(() => {
    fetch("/tikets.json")
      .then((res) => res.json())
      .then((data) => {
         setTickets(data) 
      })
      
  }, [])
  
  return (
    <>
    <Navbar></Navbar>
    <BannerCard></BannerCard>
     <TicketsCard tickets={tickets}></TicketsCard>
    </>
  )
}

export default App