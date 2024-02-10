
import Auth from './Pages/Auth/index.module'
import Home from './Pages/Home'
import Settings from "./Pages/Settings"
import Followers from "./Pages/Followers"
import Followings from './Pages/Followings'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/Miss'

const App = () => {
  
  return (
    <>

    <Routes>

        <Route path=':id' element={<Home/>}/>
        <Route path='/followers' element={<Followers/>}/>
        <Route path="/home">
          <Route index element={<Home />} />
          <Route path=":paramId" element={<Home />} />
        </Route>
        <Route path='/followings' element={<Followings/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/setting' element={<Settings/>}/>
        <Route path='/' element={<Auth/>}/> 
        <Route path='/*' element={<NotFound/>}/> 
 
      </Routes>
    </>
  )
}

export default App