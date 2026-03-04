import React from 'react'

function Navbar() {
  return (
     <div className="bg-white  shadow-sm">
  <div className="max-w-6xl mx-auto px-6"> 
    <div className="navbar py-4">
      <div className="navbar-start">
        <h1 className="text-2xl font-bold text-[#130B2D]">
          CS — Ticket System
        </h1>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <ul className="menu menu-horizontal p-0 text-sm text-[#000000]">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>

    <button className="bg-blue-800 text-[#FFFFFF] px-4 py-2 rounded-md font-semibold text-sm">
  + New Ticket
</button>

      </div>

    </div>
  </div>
</div>
  )
}

export default Navbar
