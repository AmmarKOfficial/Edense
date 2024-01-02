import "./index.css"
import Nav from "../../Components/Nav"
import Profile from "../../Components/Profile"
import Tweet from "../../Components/Tweet"

const index = () => {
  return (
    <>
        <Nav/>
        <div className="container">
          <Profile/>
          <Tweet />
        </div>
    </>
    
  )
}

export default index