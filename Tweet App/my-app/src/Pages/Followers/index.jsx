
import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"

const index = ({name, handle, date}) => {
  return (
   <>
   
   <Nav/>
    <div className={classes.container}>

    <div className={classes.follower}>
        <div className={classes.follower_img}></div>

        <div>
            <div className={classes.follower_top}>
                <h3 className={classes.name}> {name} </h3>
                <h4 className={classes.date}> Follower Since {date}</h4>
        </div>
        
        <h4 className={classes.handel}>@{handle}</h4>

        </div>
        
    </div>
    </div>
    
    <Footer/>
   </>
  )
}

export default index