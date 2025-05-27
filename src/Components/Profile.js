import React from 'react';
import avatar from '../img/avatar.png'; 
import { IoAddCircle } from 'react-icons/io5';
import { RiAccountCircleFill } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto font-sans space-y-8 hidden md:block">
      <div className="flex justify-end items-center gap-2">
        <RiAccountCircleFill size={35} className='text-purple-800'/>
        <button className="w-8 h-8 rounded-xl bg-purple-800 flex items-center justify-center text-white text-xl font-bold">
          <IoAddCircle />
        </button>
      </div>
    </div>
  );
};

export default Profile;
