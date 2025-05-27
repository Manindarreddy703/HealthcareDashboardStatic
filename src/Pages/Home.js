import React, { useEffect, useState } from 'react';
import Dashboard from '../Components/Dashboard';
import ScheduleDashboard from '../Components/ScheduleDashboard';

const Home = ({ sidebar, SetSidebar, activeTab, setActiveTab }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 490);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 490);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <div>
      <div className='grid grid-cols-2 bg-white rounded-md overflow-auto min-h-[100vh]'>
        {isSmallScreen ? (
          <>
            {activeTab === 'dashboard' && (
              <Dashboard
                visible={true}
                sidebar={sidebar}
                SetSidebar={SetSidebar}
                setActiveTab={setActiveTab}
              />
            )}
            {activeTab === 'schedule' && (
              <ScheduleDashboard
                visible={true}
                sidebar={sidebar}
                SetSidebar={SetSidebar}
                setActiveTab={setActiveTab}
              />
            )}
          </>
        ) : (
          <>
            <Dashboard
              visible={true}
              sidebar={sidebar}
              SetSidebar={SetSidebar}
              setActiveTab={setActiveTab}
            />
            <ScheduleDashboard
              visible={true}
              sidebar={sidebar}
              SetSidebar={SetSidebar}
              setActiveTab={setActiveTab}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
