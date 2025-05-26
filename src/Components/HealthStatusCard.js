
import React from 'react';

const HealthStatusCard = ({ label, date, color, progress }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{label}</h2>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div className={`${color} ${progress} h-full rounded`}></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;
