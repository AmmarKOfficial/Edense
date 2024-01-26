import { useState } from "react"
import classes from "./index.module.css"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'

const index = (props) => {
  const loginState = props.loginState

  const [isName,setIsName] =useState("")
  const [isEmail,setIsEmail] =useState("")
  const [isPassword,setIsPassword] =useState("")
  const [isConfirmPassword,setIsConfirmPassword] =useState("")
  const [isErrorMessage,setIsErrorMessage] =useState(" ")

  const handleRegister = async (e) => {
    e.preventDefault();

    let validEmail = isEmail.trim()

    if (!isName.trim()){
      setIsErrorMessage("Write Correct Name")
    }
    else if (!validEmail) {
      setIsErrorMessage("Please Correct Your Email!")
    } 
    else if (isPassword.length < 8 ){
      setIsErrorMessage("Paswords must be atleast 8 characters")
    }
    else if (isConfirmPassword != isPassword){
        setIsErrorMessage("Paswords are not same")
    } 
    else {
      setIsErrorMessage("")
      try {
        const user = await createUserWithEmailAndPassword(auth, isEmail, isPassword)
        console.log(user)
      } 
      catch (error) {
        console.log(error.code)
      }
      console.log(isName, isEmail, isPassword)
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
        <input required className={classes.input_field} value={isName} onChange={(e)=>{setIsName(e.target.value)}} type="name" placeholder="Your Name" />
        <input required className={classes.input_field} value={isEmail} onChange={(e)=>{setIsEmail(e.target.value)}} type="email" placeholder="Your Email" />
        <input required className={classes.input_field} value={isPassword} onChange={(e)=>{setIsPassword(e.target.value)}} type="password" placeholder="Your Password" />
        <input required className={classes.input_field} value={isConfirmPassword} onChange={(e)=>{setIsConfirmPassword(e.target.value)}} type="password" placeholder="Confirm Password" />
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