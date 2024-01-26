import classes from "./index.module.css"
import { NavLink } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";


const index = () => {

  const navigate = useNavigate()

  let units = [
    {placeholder:"Home",path:'/home',page:true},
    {placeholder:"Settings",path:'/setting',page:true},
    {placeholder:"Followers",path:'/home/followers',page:true},
    {placeholder:"Followings",path:'/home/followings',page:true},
    {placeholder:"Sign Out",path:'/',page:false},


  ]

  const logoutHandler = () =>{
    signOut(auth)
    .then(()=>{
      navigate("/")
    })
    .catch((err)=>{
      console.log(err)
    })

  }


  return (

    <nav>
    <h3>Density</h3>
    <ul className={classes.list_items}>

  
      {
        units.map((item,index)=>(
          <li key={index} className={classes.list_item}>
              {item.page ? <NavLink to={item.path} 
              className={({ isActive }) => (isActive ? classes.active : '')}
              // className={classes.active}
            >
              {item.placeholder}
              </NavLink> : <button className={classes.btn} onClick={logoutHandler}>Signout</button> }
          </li>
        ))
      }

        
    </ul> 
    </nav>

  )
}

export default index
