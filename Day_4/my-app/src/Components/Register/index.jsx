import "./index.css"

const index = (props) => {
  const loginState = props.loginState

  return (
    <>
      <div className="login">

      <h1> Register Your Account</h1>
      <form className="login_form">
        <input className="input_field" type="name" placeholder="Your Name" />
        <input className="input_field" type="email" placeholder="Your Email" />
        <input className="input_field" type="password" placeholder="Your Password" />
        <input className="input_field" type="password" placeholder="Confirm Password" />
        <input className="btn" type="submit" value={"Register"} />
        
      </form>

      <p>
        Already have an account? {" "} <span className="login_switch" onClick={loginState}> Login </span>
      </p>

      </div>
    </>
  )
}

export default index