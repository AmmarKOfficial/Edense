import classes from "./index.module.css"


const index = () => {
  return (

    <nav>
    <h3>My-App</h3>
    <ul className={classes.list_items}>
        <li className={classes.list_item}>Home</li>
        <li className={classes.list_item}>Settings</li>
        <li className={classes.list_item}>Followers</li>
        <li className={classes.list_item}>Sign out</li>
    </ul> 
    </nav>

  )
}

export default index