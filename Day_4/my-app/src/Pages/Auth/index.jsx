import { useState } from 'react'
import Login from '../../Components/Login'
import Register from '../../Components/Register'
import './index.css'

const index = () => {
  
  const [isRegister, setIsRegister] = useState(false)

  const switchState = () =>{
    setIsRegister(!isRegister)
  }

  return (
    <>
    <div className='container'>
    {
      isRegister ? <Login loginState={switchState}/> : <Register loginState={switchState}/>
    }
      
    </div>
    </>
  )
}

export default index