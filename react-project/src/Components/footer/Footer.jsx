import React from 'react'
import fbicon from "../../assets/f.png"
import xicon from "../../assets/twiter.png"
import linkicon from "../../assets/linkdin.png"
function Footer() {
  return (
   <footer className=" bg-gray-900 text-[#A1A1AA] py-10 mt-8">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

 
    <div>
      <h2 className="text-lg font-semibold mb-3">CS — Ticket System</h2>
      <p className="text-sm leading-relaxed">
      A centralized platform where users can create support tickets, track their issues,
      and get quick assistance from the support team.
      </p>


    </div>

    <div>
      <h2 className="text-lg font-semibold mb-3">Company</h2>
      <ul className="space-y-2 text-sm">
        <li>About Us</li>
        <li>Our Mission</li>
        <li>Contact Sales</li>
      </ul>
    </div>

    <div>
      <h2 className="text-lg font-semibold mb-3">Services</h2>
      <ul className="space-y-2 text-sm">
        <li>Products & Services</li>
        <li>Our Mission</li>
        <li>Contact Saled</li>
      </ul>
    </div>


    <div>
      <h2 className="text-lg font-semibold mb-3">Information</h2>
      <ul className="space-y-2 text-sm">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Join Us</li>
      </ul>
    </div>

    <div>
      <h2 className="text-lg font-semibold mb-3 ">Social Links</h2>
      <ul className="space-y-2 text-sm">
     
       <li className="flex items-center  gap-2">
      <img className="bg-white rounded-full px-2 py-1" src={fbicon} alt="facebook icon" />
       @CS — Ticket System
        </li>
       
       <li className="flex items-center gap-2">
      <img className="bg-white rounded-full px-2 py-1" src={xicon} alt="facebook icon" />
       @CS — Ticket System
        </li>
       
       <li className="flex items-center gap-2">
      <img className="bg-white rounded-full px-2 py-1 text-2xl" src={linkicon} alt="facebook icon" />
       @CS — Ticket System
        </li>     
      </ul>
    </div>

  </div>

  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
    <p>&copy; 2026 CS — Ticket System. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer

