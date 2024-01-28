
import Auth from './Pages/Auth/index.module'
import Home from './Pages/Home'
import Settings from "./Pages/Settings"
import Followers from "./Pages/Followers"
import Followings from './Pages/Followings'

import { Route, Routes } from 'react-router-dom'
import {auth} from '../src/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import NotFound from './Pages/Miss'

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setIsLogin(true)
      }else{
        setIsLogin(false)
      }
    })
   
  }, [])
  
  
  return (
    <>
    {
      console.log(isLogin)
    }
    <Routes>
      {
        isLogin ? <>
        <Route path=':id' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/home'>
          <Route index element={<Home/>}/>
          <Route path='followers' element={<Followers/>}/>
          <Route path='followings' element={<Followings/>}/>
        </Route>
        <Route path='/setting' element={<Settings/>}/>
        </> :
        <>
        <Route path='/' element={<Auth/>}/> 
        <Route path='/*' element={<NotFound/>}/> 
        </>
        
      }
      </Routes>
    </>
  )
}

export default App