import React from 'react';
import { Bell } from 'lucide-react';
import HealthStatusCard from './HealthStatusCard';
import WeeklyActivityChart from './WeeklyActivityChart';
const healthItems = [
    { label: 'Lungs', date: '26 Oct 2021', color: 'bg-red-400', progress: 'w-2/3' },
    { label: 'Teeth', date: '26 Oct 2021', color: 'bg-green-400', progress: 'w-4/5' },
    { label: 'Bone', date: '26 Oct 2021', color: 'bg-orange-400', progress: 'w-1/2' }
]
const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen font-sans">
            <div className="flex justify-between items-center mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 border rounded-full shadow-sm"
                />
                <div className="p-2 bg-white rounded-full shadow">
                    <Bell size={20} />
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-white p-6 rounded-xl shadow">
                    <div className="relative flex justify-center items-center">
                        <img
                            src="/img/body.png"
                            alt="Human Anatomy"
                            className="w-72"
                        />
                        <div className="absolute top-28  right-10 bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow">
                            Healthy Heart
                        </div>
                        <div className="absolute bottom-24 left-8 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm shadow">
                            Healthy Leg
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4 w-full md:w-1/3">
                    {healthItems.map((item, index) => (
                        <HealthStatusCard
                            key={index}
                            label={item.label}
                            date={item.date}
                            color={item.color}
                            progress={item.progress}
                        />
                    ))}
                </div>
            </div>

           <WeeklyActivityChart />
        </div>
    );
};

export default Dashboard;
