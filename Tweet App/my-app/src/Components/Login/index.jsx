import { useState } from "react";
import classes from "./index.module.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";


const index = ({loginState}) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, SetErrorMessage] = useState("")

  const onLogin = async (e)=>{
    e.preventDefault();

    let validEmail = email.trim()

    if (!validEmail) {
      SetErrorMessage("Please Write Your Email!")
    } 
    else if (password.length < 8){
      SetErrorMessage("Password Should Have Atleast 8 Characters")
    }
    else {
      console.log(email, password)

      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);

        navigate("/home");
      } catch (error) {
        console.log(error.errorCode)
        console.log(error.errorMessage)
      }
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
        <input className={classes.input_field} type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Your Password" required/>
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