import React from 'react';
import { Bell, Menu } from 'lucide-react';
import HealthStatusCard from './HealthStatusCard';
import WeeklyActivityChart from './WeeklyActivityChart';

const healthItems = [
    { label: 'Lungs', date: '26 Oct 2021', color: 'bg-red-400', progress: 'w-2/3' },
    { label: 'Teeth', date: '26 Oct 2021', color: 'bg-green-400', progress: 'w-4/5' },
    { label: 'Bone', date: '26 Oct 2021', color: 'bg-orange-400', progress: 'w-1/2' },
    { label: 'Heart', date: '26 Oct 2021', color: 'bg-violet-400', progress: 'w-4/6' }
]
const Dashboard = ({SetSidebar, setActiveTab }) => {
    return (
        <div className={`p-3 bg-gray-50 font-sans h-[100vh]  [@media(max-width:490px)]:w-[95vw]`}>
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
            <div className=" flex gap-5 m-2 justify-evenly [@media(min-width:490px)]:hidden">
                <button  onClick={() => setActiveTab('dashboard')} className='px-4 py-2 bg-gray-400 text-xl font-bold rounded-lg hover:text-gray-700'>Dashboard</button>
                <button  onClick={() => setActiveTab('schedule')} className='px-5 py-2 bg-gray-400 text-xl font-bold rounded-lg hover:text-gray-700'>Schedule</button>
            </div>
            <h1 className="text-2xl font-bold mb-2 w-[100%] text-start pl-3 hidden [@media(min-width:490px)]:block">Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-6 ">
                <div className="flex-1 bg-white p-6 rounded-xl shadow">
                    <div className="relative flex justify-center">
                        <img
                            src="/img/body.png"
                            alt="Human Anatomy"
                            className="max-h-[400px]"
                        />
                        <div className="absolute top-20  right-10 bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow">
                            Healthy Heart
                        </div>
                        <div className="absolute bottom-10 left-8 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm shadow">
                            Healthy Leg
                        </div>
                    </div>
                </div>


                <div className="grid gap-4 mt-4 w-full md:w-1/3 grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
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
