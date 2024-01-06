import { useState } from "react";
import classes from "./index.module.css"


const index = ({loginState}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, SetErrorMessage] = useState("")

  const onLogin = (e)=>{
    e.preventDefault();

    let validEmail = email.trim()

    if (!validEmail) {
      SetErrorMessage("Please write your email!")
    } 
    else {
      SetErrorMessage("")
    }
    
    console.log(email);
    console.log(password.length);
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
    if(password.length < 8 ) {
      SetErrorMessage("Password use be atleast 8 characters")
    }
    else {
      SetErrorMessage("")
    }

  }

  return (
    <>
      <div className={classes.login}>

      <h1> Login to Your Account</h1>
      <div className={classes.error}>{errorMessage}</div>
      
      <form onSubmit={(e)=>{onLogin(e)}} className={classes.login_form}>
        <input className={classes.input_field} type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email" required/>
        <input className={classes.input_field} type="password" value={password} onChange={handlePassword} placeholder="Your Password" required/>
        <input className={classes.btn} type="submit" value={"Sign In"} />
        
      </form>

      <p>
        Don&apos;t have an account? {" "} <span className={classes.login_switch} onClick={loginState}> Register </span>
      </p>

      </div>
    </>
  )
}

export default index