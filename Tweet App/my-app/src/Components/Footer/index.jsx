import classes from "./index.module.css"

const Footer = () => {
  return (
    <>
        <footer className={classes.footer}>
            <h4 className={classes.hoot_h4}>All Copyrights Reserved</h4>
            <div className={classes.div_right}>
            <h4 className={classes.hoot_h4}>Devloped By Ammar</h4>
            <h4 className={classes.hoot_h4}>Edversity React Masterclass</h4>
            </div>
        </footer>
    </>
  )
}

export default Footer