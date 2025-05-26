import { Calendar } from 'lucide-react';
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const linkClass = ({ isActive }) =>
  `flex items-center justify-start gap-3 text-sm cursor-pointer transition-all delay-75 
   ${isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'}`;
  return (
    <div className='w-[20vw] h-[100vh] font-bold rounded  text-white shadow-2xl'>
      <div className="h-[12vh] w-full flex justify-center pt-10 space-x-1">
        <a href="#" className='flex text-3xl font-bold'>
            <span className=' text-teal-500'>Health</span>
            <span className='text-indigo-950'>Care.</span>
        </a>
      </div>
      <div className='h-[37vh] flex flex-col justify-evenly text-2xl items-center'>
        <p className='flex items-center gap-5 text-gray-600 pr-20 text-sm'>General</p>
        <ul className='flex flex-col justify-evenly items-start gap-5 pl-10'>
            <NavLink to={'/'} className={linkClass}> <MdDashboard className='text-2xl' /> <span className='text-sm'>Dashboard</span></NavLink>
            <NavLink to={'/history'} className={linkClass}> <FaHistory className='text-lg'/> <span className='text-sm'>History</span></NavLink>
            <NavLink to={'/calender'} className={linkClass}> <AiFillSchedule className='text-lg'/> <span className='text-sm'> Calender</span></NavLink>
            <NavLink to={'/appointment'} className={linkClass}> <IoMdPersonAdd className='text-lg'/> <span className='text-sm'>Appointment</span></NavLink>
            <NavLink to={'statistics'} className={linkClass}><GiProgression className='text-lg'/> <span className='text-sm'>Statistics</span> </NavLink>
        </ul>
      </div>
      <div className='h-[30vh] flex flex-col justify-start gap-5 items-center'>
      <p className='flex items-center gap-5 text-sm text-gray-600 pr-20'>Tools</p>
        <ul className='flex flex-col justify-evenly items-start gap-5 pl-10'>
            <NavLink className={linkClass} to={'/chat'}> <IoChatbubbleEllipsesSharp className='text-lg' /> <span className='text-sm'>Chat</span></NavLink>
            <NavLink className={linkClass} to={'/support'}> <FaPhoneAlt className='text-lg'/> <span className='text-sm'>Support</span></NavLink>
        </ul>
      </div>
      <div className='h-[13vh] flex flex-col justify-end items-center'>
        <ul className='flex flex-col justify-evenly items-start gap-5 pl-10'>
            <NavLink className={linkClass} to={'settings'}> <IoMdSettings className='text-lg' /> <span className='text-sm'>Settings</span></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
