import classes from "./index.module.css"

const Followings = ({name, date, handle}) => {
  return (
    <div className={classes.following}>
        <div className={classes.following_img}></div>

        <div>
            <div className={classes.following_top}>
                <h3 className={classes.name}> {name} </h3>
                <h4 className={classes.date}> Followed Since {date}</h4>
        </div>
        
        <h4 className={classes.handel}>@{handle}</h4>

        </div>
        
    </div>
  )
}

export default Followings