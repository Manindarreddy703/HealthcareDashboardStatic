import React from 'react';
import avatar from '../../public/img/avatar.png'; 
const Profile = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans space-y-8">
      <div className="flex justify-end items-center gap-2">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-xl object-cover bg-cyan-400"
        />
        <button className="w-10 h-10 rounded-xl bg-purple-800 flex items-center justify-center text-white text-xl font-bold">
          +
        </button>
      </div>
    </div>
  );
};

export default Profile;
