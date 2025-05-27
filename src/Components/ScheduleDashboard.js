import React from 'react';
import ScheduleHeader from './ScheduleHeader';
import Profile from './Profile';
import UpcomingSchedule from './UpcomingSchedule';
import { Bell, Menu } from 'lucide-react';

const ScheduleDashboard = ({sidebar, SetSidebar ,activeTab, setActiveTab}) => {
  {
    console.log(activeTab)
  }
  return (
    <div className={  'p-2 bg-gray-50 min-h-screen  [@media(max-width:490px)]:w-[95vw]'}>
      {
        activeTab  == 'schedule' &&
        <div className="flex justify-between items-center mb-3 md:relative md:right-300">
          <div className="  sm:block md:hidden ml-4 mr-4">
              <Menu onClick={() => SetSidebar(prev => !prev)} />
          </div>
          <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-full shadow-sm"
          />
          <div className="p-2 bg-white rounded-full shadow">
              <Bell size={20} />
          </div>
      </div>
      }
      <div className=" flex gap-5 m-2 justify-evenly [@media(min-width:490px)]:hidden">
          <button  onClick={() => setActiveTab('dashboard')} className='px-4 py-2 bg-gray-400 text-xl font-bold rounded-lg hover:text-gray-700'>Dashboard</button>
          <button  onClick={() => setActiveTab('schedule')} className='px-5 py-2 bg-gray-400 text-xl font-bold rounded-lg hover:text-gray-700'>Schedule</button>
      </div>
      <Profile/>
      <ScheduleHeader/>
      <UpcomingSchedule />
    </div>
  );
};

export default ScheduleDashboard;
