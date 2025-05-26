import React from 'react';
import ScheduleHeader from './ScheduleHeader';
// import AppointmentCard from './AppointmentCard';
import UpcomingSchedule from './UpcomingSchedule';

const ScheduleDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ScheduleHeader/>

      <UpcomingSchedule />
    </div>
  );
};

export default ScheduleDashboard;
