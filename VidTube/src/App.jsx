import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Sidebar from './Components/SideBar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
function App() {
  const [sidebar,setSidebar] = useState(true);

  return (
   <>
   <Navbar setSidebar={setSidebar}/>
    <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
   </> 
  )
}

export default App
