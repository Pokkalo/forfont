import './App.css';
import OurSidebar from './component/OurSidebar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Devices from './pages/Devices';
import DeviceList from './pages/DeviceList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/analytics' element={<Analytics/>}></Route>
        <Route path='/comment' element={<Comment/>}></Route>
        <Route path='/devices' element={<Devices/>}></Route>
        <Route path='/deviceList' element={<DeviceList/>}></Route>
      </Routes>
      </BrowserRouter>
      <OurSidebar/>
    </div>
  );
}

export default App;
