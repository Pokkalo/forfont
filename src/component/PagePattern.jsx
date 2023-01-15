import React , {useContext} from 'react'
import OurSidebar from '../component/OurSidebar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Analytics from '../pages/Analytics';
import Comment from '../pages/Comment';
import Devices from '../pages/Devices';
import DeviceList from '../pages/DeviceList';
import Header from '../component/Header';

import Account from '../pages/Account';
import Announance from '../pages/Announance';
import Setting from '../pages/Setting';
import { SidebarPage } from '../component/OurSidebar';


const PagePattern = () => {
  const pages = useContext(SidebarPage)

  return (
    <div className='pattern'>      
    <BrowserRouter>
    <OurSidebar >
    
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/analytics' element={<Analytics/>}></Route>
        <Route path='/comment' element={<Comment/>}></Route>
        <Route path='/devices' element={<Devices/>}></Route>
        <Route path='/deviceList' element={<DeviceList/>}></Route>
      </Routes> 
    </OurSidebar>
    </BrowserRouter>
    <BrowserRouter>
    <Header >
      <Routes>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/announance' element={<Announance/>}></Route>
        <Route path='/setting' element={<Setting/>}></Route>
      </Routes>
      <div className="">{pages}</div>
    </Header>

  </BrowserRouter>
  </div>
  )
}

export default PagePattern