import React from 'react';

const days = [
  { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
  { day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'], active: true },
  { day: 'Wed', date: 27, times: ['12:00', '13:00'] },
  { day: 'Thurs', date: 28, times: ['10:00', '11:00'], highlight: '11:00' },
  { day: 'Fri', date: 29, times: ['14:00', '16:00'] },
  { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'], highlight: '12:00' },
  { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'], disabled: true }
];

const AppointmentCard = ({ title, time, doctor, icon, bg = 'bg-blue-800', textColor = 'text-white' }) => (
  <div className={`flex flex-col ${bg} ${textColor} p-4 rounded-2xl w-full md:w-1/2`}>
    <div className="flex justify-between items-center">
      <h4 className="text-md font-semibold">{title}</h4>
      <span className="text-xl">{icon}</span>
    </div>
    <p className="text-sm mt-2">{time}</p>
    <p className="text-sm">{doctor}</p>
  </div>
);

const SchedulePage = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans space-y-8">
      {/* Calendar */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">October 2021</h2>
          <div className="space-x-2 text-purple-500">
            <button>{'<'}</button>
            <button>{'>'}</button>
          </div>
        </div>
        <div className="flex justify-between overflow-x-auto gap-4">
          {days.map((d, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center px-2 py-3 rounded-xl ${
                d.active ? 'bg-purple-100' : d.disabled ? 'text-gray-400' : ''
              }`}
            >
              <span className="text-sm">{d.day}</span>
              <span className="text-md font-semibold">{d.date}</span>
              <div className="mt-2 space-y-1">
                {d.times.map((t, i) => (
                  <div
                    key={i}
                    className={`text-xs px-2 py-1 rounded-full ${
                      d.highlight === t
                        ? 'bg-purple-200 text-purple-800'
                        : d.active && t === '09:00'
                        ? 'bg-blue-800 text-white'
                        : 'text-gray-500'
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointments */}
      <div className="flex flex-col md:flex-row gap-4">
        <AppointmentCard
          title="Dentist"
          time="09:00–11:00"
          doctor="Dr. Cameron Williamson"
          icon="🦷"
        />
        <AppointmentCard
          title="Physiotherapy Appointment"
          time="11:00–12:00"
          doctor="Dr. Kevin Djones"
          icon="💪"
          bg="bg-purple-100"
          textColor="text-gray-800"
        />
      </div>
    </div>
  );
};

export default SchedulePage;
