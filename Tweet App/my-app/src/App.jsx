
import Auth from './Pages/Auth/index.module'
import Home from './Pages/Home'
import Settings from "./Pages/Settings"
import Followers from "./Pages/Followers"
import Followings from './Pages/Followings'

import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Routes>
      
      <Route path='/' element={<Auth/>}/>
      <Route path=':id' element={<Home/>}/>

      <Route path='/home'>
      <Route index element={<Home/>}/>
      <Route path='followers' element={<Followers/>}/>
      <Route path='followings' element={<Followings/>}/>
      </Route>

      <Route path='/setting' element={<Settings/>}/>

      </Routes>
    </>
  )
}

export default App