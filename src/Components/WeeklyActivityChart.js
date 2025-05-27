import React from 'react';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const WeeklyActivityChart = () => {
  return (
    <div className="mt-3 bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Activity</h2>
        <p className="text-sm text-gray-500">3 appointments this week</p>
      </div>

      <div className="flex justify-between items-end h-32">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-1">
            <div className="flex gap-1">
              <div
                className="w-2 bg-blue-400 rounded"
                style={{ height: `${30 + Math.random() * 60}px` }}
              ></div>
              <div
                className="w-2 bg-purple-400 rounded"
                style={{ height: `${20 + Math.random() * 60}px` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyActivityChart;