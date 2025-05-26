import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard'
import ScheduleDashboard from './Components/ScheduleDashboard';

function App() {
  return (
    <div className="App">
      <div className='flex flex-row m-2 rounded-md'>
      <Sidebar />
      <Dashboard />
      <ScheduleDashboard />
      </div>
      

    </div>
  );
}

export default App;
