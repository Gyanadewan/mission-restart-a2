import React from 'react'

function BannerCard({inProgress}) {
  return (
    <div>
      <div className='grid grid-cols-2 gap-4 max-w-6xl mx-auto my-8 px-6'>
           <div className="relative card bg-violet-600  shadow-sm overflow-hidden ">
        <div className="card-body flex flex-col items-center justify-center text-center relative z-10">
          <h2 className="card-title text-[#FFFFFF]">In-Progress</h2>
          <p className='font-semibold text-5xl text-white'>{inProgress}</p>
        </div>
      </div>
         <div className="relative card bg-emerald-400  shadow-sm overflow-hidden ">
        <div className="card-body flex flex-col items-center justify-center text-center relative z-10">
          <h2 className="card-title text-[#FFFFFF]">Resolved</h2>
          <p className='font-semibold text-5xl text-white'>0</p>
        </div>
      </div>
   </div>
    </div>
  )
}

export default BannerCard
