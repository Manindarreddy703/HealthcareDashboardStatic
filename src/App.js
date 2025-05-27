import './App.css';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Calendar from './Pages/Calender';
import History from './Pages/History';
import { useState } from 'react';

function App() {
  const [sidebar, SetSidebar] = useState(false)

  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <div className="App">
      <div className='h-[95vh] flex flex-row m-2 rounded-md fixed justify-between'>
      {sidebar && (
        <>
        <div 
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => SetSidebar(false)}
          />
        <div className="fixed top-0 left-0 w-[60vw] sm:w-[40vw] h-full bg-white shadow-md p-4 z-50 rounded-r-md md:hidden">
            <Sidebar SetSidebar={SetSidebar} />
          </div>
        </>
      )}
      <div className="hidden md:block w-[20vw]">
        <Sidebar SetSidebar={SetSidebar} />
      </div>
      <div className=" h-[100vh] overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}  SetSidebar={SetSidebar} activeTab={activeTab} setActiveTab={setActiveTab} />} />
          
          <Route path='/calender' element={<Calendar />} />
          <Route path='/history' element={<History />} />
          <Route path='*'  element={''}/>
        </Routes>
      </div>
      </div>
      

    </div>
  );
}

export default App;
