import { useEffect, useState } from 'react';
import BannerCard from './Components/BannerCard'
import Navbar from './Components/Navbar'
import TicketsCard from './Components/Cards/TicketsCard';
import Footer from './Components/footer/footer';


function App() {
  const [tickets,setTickets]= useState([])
  const [inProgress,setInprogress] = useState(0)
  const [selectedTitle, setSelectedTitle] = useState([])
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
    <BannerCard inProgress={inProgress}></BannerCard>
     <div className="flex flex-row gap-4 px-4 mt-10">
        <div className="w-full md:w-2/3">
          <TicketsCard setSelectedTitle={setSelectedTitle} setInprogress={setInprogress} tickets={tickets} />
        </div>
           
           

  <div className='w-1/3 p-3 mt-2 space-y-2'>
    <h1 className='text-[#34485A] text-xl font-medium'>Task Status</h1>
{selectedTitle.length === 0 ? (
  <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
) : (
  selectedTitle.map((title, index) => (
    <div key={index}>
      <p className='text-[#627382] px-2 py-1 bg-gray-100 rounded'>
        {title}
      </p>

      <button className="mt-1 w-full bg-green-500 text-white px-3 py-1 rounded">
        Complete
      </button>
    </div>
  ))
)}
      
       <div className='mt-5'>
             <h3 className='text-lg font-semibold  text-[#34485A]'>Resolved Task</h3>
          <p className='text-[#627382] '>No resolved tasks yet.</p>
          </div>
  </div>

</div>

         
        
      
    
     <Footer></Footer>
       
    </>
  )
}

export default App