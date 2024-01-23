
import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"
import Follower from "../../Components/Follower"

const index = () => {
  return (
   <>
   <Nav/>
   <h1> Followers </h1>
    <div className={classes.container}>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    <Follower name={"Sadaqat Ullah"} date={"2022"} handle={"KhanSadaqat"}/>
    
    </div>
    
    <Footer/>
   </>
  )
}

export default index
