// src/components/UpcomingSchedule.jsx
import React from 'react';

const UpcomingSchedule = () => {
  const schedule = {
    Thursday: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🩺' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
    Saturday: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧑‍⚕️' },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 mt-5">The Upcoming Schedule</h2>
      {Object.entries(schedule).map(([day, items]) => (
        <div key={day} className="mb-4">
          <p className="text-sm text-gray-500 mb-2">On {day}</p>
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <div key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                {item.title}
                <span>{item.icon}</span>
                <span className="ml-auto text-xs text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
