import React from 'react'
import Auth from './Pages/Auth/index.module'
import Home from './Pages/Home'
import Settings from "./Pages/Settings"
import Followers from "./Pages/Followers"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"


const App = () => {
  return (
    <>
      {/* <Auth /> */}
      <Home/>
      {/* <Settings/> */}
      {/* <Followers name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/> */}
    </>
  )
}

export default App