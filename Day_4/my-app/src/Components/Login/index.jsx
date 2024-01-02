import "./index.css"

const index = (props) => {
  const loginState = props.loginState
  return (
    <>
      <div className="login">

      <h1> Login to Your Account</h1>
      <form className="login_form">
        <input className="input_field" type="email" placeholder="Your Email" />
        <input className="input_field" type="password" placeholder="Your Password" />
        <input className="btn" type="submit" value={"Sign In"} />
        
      </form>

      <p>
        Don&apos;t have an account? {" "} <span className="login_switch" onClick={loginState}> Register </span>
      </p>

      </div>
    </>
  )
}

export default index