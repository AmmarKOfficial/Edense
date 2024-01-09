import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import Profile from "../../Components/Profile"
import Tweet from "../../Components/Tweet"
import Footer from "../../Components/Footer"

const index = () => {
  return (
    <>
        <Nav/>
        <div className={classes.container}>
          <Profile/>
          {
            [1,2,3,4,5].map((item,index)=>{
              return <Tweet key={index} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit illo. Iure exercitationem architecto repudiandae consequuntur laudantium, obcaecati possimus pariatur iste aliquid aspernatur qui esse reprehenderit quisquam odio facere tempore!" date="January 2, 2024" likes="500" />
            })
          }
        </div>
        <Footer/>
    </>
    
  )
}

export default index