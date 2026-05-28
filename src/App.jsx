import React from 'react'
import {Route,Routes} from 'react-router'
import Todo from './components/Todo'
import Timer from './components/Timer'
import NavBar from './components/NavBar'
import TimerPage from './components/TimerPage'
import FullscreenTimer from './redux/FullScreenPage'
import GlobalTimer from './components/GlobalTimer'


const App = () => {
  return (
    <div className=' select-none font-mono font-semibold
            tracking-widest bg-gray-900 h-screen' >
      <NavBar/>
      {/* Here below will handle all the timers */}
      <GlobalTimer />
      <Routes>
        <Route path='/' element={<Todo/>} />
        <Route  path='/timer' element={<TimerPage/>} />
        <Route path="/fullscreen" element={<FullscreenTimer />} />

      </Routes>

    </div>
  )
}

export default App
