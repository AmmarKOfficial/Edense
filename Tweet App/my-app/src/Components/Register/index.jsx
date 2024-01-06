import { useState } from "react"
import classes from "./index.module.css"

const index = (props) => {
  const loginState = props.loginState

  const [isName,setIsName] =useState("")
  const [isEmail,setIsEmail] =useState("")
  const [isPassword,setIsPassword] =useState("")
  const [isConfirmPassword,setIsConfirmPassword] =useState("")
  const [isErrorMessage,setIsErrorMessage] =useState(" ")

  const handleRegister = (e) => {
    e.preventDefault();

    let validEmail = isEmail.trim()

    if (!validEmail) {
      setIsErrorMessage("Please Correct Your Email!")
    } 
    else {
      setIsErrorMessage("")
    }
  }

  const handleConfirmPass = (e) => {
    setIsConfirmPassword(e.target.value)
    console.log(isPassword)
    console.log(isConfirmPassword)

    if(isPassword != isConfirmPassword){
      setIsErrorMessage("Confirm Password is not same is Password")
    }
    else
    {
      setIsErrorMessage("")
    }

  }
  
  return (
    <>
      <div className={classes.login}>

      <h1> Register Your Account</h1>
      {
        isErrorMessage ? <div className={classes.error}>{isErrorMessage}</div> : ""
      }
      
      <form onSubmit={(e)=>{handleRegister(e)}} className={classes.login_form}>
        <input className={classes.input_field} value={isName} onChange={(e)=>{setIsName(e.target.value)}} type="name" placeholder="Your Name" />
        <input className={classes.input_field} value={isEmail} onChange={(e)=>{setIsEmail(e.target.value)}} type="email" placeholder="Your Email" />
        <input className={classes.input_field} value={isPassword} onChange={(e)=>{setIsPassword(e.target.value)}} type="password" placeholder="Your Password" />
        <input className={classes.input_field} value={isConfirmPassword} onChange={(e)=>{handleConfirmPass(e)}} type="password" placeholder="Confirm Password" />
        <input className={classes.btn} type="submit" value={"Register"} />
        
      </form>

      <p>
        Already have an account? {" "} <span className={classes.login_switch} onClick={loginState}> Login </span>
      </p>

      </div>
    </>
  )
}

export default index