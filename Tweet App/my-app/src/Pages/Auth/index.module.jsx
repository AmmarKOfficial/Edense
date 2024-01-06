import { useState } from 'react'
import Login from '../../Components/Login'
import Register from '../../Components/Register'
import classes from './index.module.css'

const index = () => {
  
  const [isRegister, setIsRegister] = useState(false)

  const switchState = () =>{
    setIsRegister(!isRegister)
  }

  return (
    <>
    <div className={classes.container}>
    {
      isRegister ? <Login loginState={switchState}/> : <Register loginState={switchState}/>
    }
      
    </div>
    </>
  )
}

export default index