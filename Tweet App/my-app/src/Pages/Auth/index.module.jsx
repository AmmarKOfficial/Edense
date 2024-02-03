/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import Login from '../../Components/Login'
import Register from '../../Components/Register'
import classes from './index.module.css'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const index = () => {
  
  const [isRegister, setIsRegister] = useState(false)
  const [isAuth, setAuth] = useState(true);
  const [isInMiddleOfRegistration, setIsInMiddleOfRegistration] = useState(false);
  const navigate = useNavigate();

  const switchState = () =>{
    setIsRegister(!isRegister)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && !isInMiddleOfRegistration) {
        navigate("/home");
      } else {
        console.log("User is not logged in!");
        setAuth(false);
      }
    });
  }, []);

  return (
    <>
      {!isAuth && (
        <div className={classes.container}>
          {isRegister ? (
            <Login loginState={switchState} />
          ) : (
            <Register
              setIsInMiddleOfRegistration={setIsInMiddleOfRegistration}
              registerState={switchState}
            />
          )}
        </div>
      )}
    </>
  )
}

export default index