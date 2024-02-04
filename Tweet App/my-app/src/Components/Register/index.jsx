/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import classes from "./index.module.css"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth,} from '../../firebase'
import { getDatabase, ref, set } from 'firebase/database'

const index = (props) => {
  const registerState = props.registerState
  const setIsInMiddleOfRegistration = props.setIsInMiddleOfRegistration

  const [isName,setIsName] =useState("")
  const [isEmail,setIsEmail] =useState("")
  const [isPassword,setIsPassword] =useState("")
  const [isConfirmPassword,setIsConfirmPassword] =useState("")
  const [isErrorMessage,setIsErrorMessage] =useState(" ")

  const handleRegister = async (e) => {
    setIsInMiddleOfRegistration(true);
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
        const resp = await createUserWithEmailAndPassword(auth, isEmail, isPassword)

        const db = getDatabase()
        set(ref(db, "users/" + resp.user.uid), {
          name: isName,
          bio: "A Random Person From The Random Relm",
          followers: 0,
          followings:0,
          tweets:{},
        })
        setIsInMiddleOfRegistration(false);

      } 
      catch (error) {
        console.log(error.code)
        setIsInMiddleOfRegistration(false);
      }
      console.log(isName, isEmail, isPassword)
      setIsConfirmPassword("")
      setIsName("")
      setIsEmail("")
      setIsPassword("")
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
        Already have an account? {" "} <span className={classes.login_switch} onClick={registerState}> Login </span>
      </p>

      </div>
    </>
  )
}

export default index