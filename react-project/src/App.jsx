import { useEffect, useState } from 'react';
import BannerCard from './Components/BannerCard'
import Navbar from './Components/Navbar'
import TicketsCard from './Components/Cards/TicketsCard';
import Footer from './Components/footer/footer';
 import { toast, ToastContainer} from 'react-toastify';
 
function App() {
  const [tickets,setTickets]= useState([])
  const [inProgress,setInprogress] = useState(0)
  const [resolved,setResolved] = useState(0)
  const [selectedTickets, setSelectedTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  useEffect(() => {
    fetch("/tikets.json")
      .then((res) => res.json())
      .then((data) => {
         setTickets(data) 
      })
  }, [])
  
  return (
    <section>
    <Navbar></Navbar>
    <BannerCard inProgress={inProgress} resolved={resolved}></BannerCard>
     <div className="flex flex-row gap-4 px-4 mt-10">
        <div className="w-full md:w-2/3">
          <TicketsCard setSelectedTickets={ setSelectedTickets} setInprogress={setInprogress}  tickets={tickets} />
        </div>
           
    <div className='w-1/3 p-3 mt-2 space-y-2'>
    <h1 className='text-[#34485A] text-xl font-medium'>Task Status</h1>
     {selectedTickets.length === 0 ? ( 
      <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
        ) : (
       selectedTickets.map(t => (
      <div key={t.id} className="space-y-1">
      <p className='text-[#627382] px-2 py-1 bg-gray-100 rounded'>{t.title}</p>
       <button className="mt-1 w-full bg-green-500 text-white px-3 py-1 rounded"
    onClick={() => {
      toast("click complete button")
    setResolved(prev => prev + 1)
    setInprogress(prev => prev - 1)
    setSelectedTickets(prev => prev.filter(s => s.id !== t.id))
    setResolvedTickets(prev => [...prev, t])   
    setTickets(prev => prev.filter(ticket => ticket.id !== t.id))
  }}
>
  Complete
</button>
    </div>
  ))
)}
      
    <div className='mt-5'>
  <h3 className='text-lg font-semibold text-[#34485A]'>Resolved Task</h3>
  {
  resolvedTickets.length === 0 ? 
    <p className='text-[#627382]'>No resolved tasks yet.</p>
   : (
    resolvedTickets.map(t => (
      <p key={t.id} className='text-[#627382] px-2 py-1 bg-gray-100 rounded my-1'>
        {t.title}
      </p>
    ))
     )}
  </div>
  </div>

   </div>

         
        
      
    
     <Footer></Footer>
       <ToastContainer /> 
    </section>
  )
}

export default App