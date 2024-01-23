import classes from "./index.module.css"
import { NavLink } from "react-router-dom"


const index = () => {

  let units = [
    {placeholder:"Home",path:'/home',page:true},
    {placeholder:"Settings",path:'/setting',page:true},
    {placeholder:"Followers",path:'/home/followers',page:true},
    {placeholder:"Followings",path:'/home/followings',page:true},
    {placeholder:"Sign Out",path:'/',page:false},


  ]
  return (

    <nav>
    <h3>Density</h3>
    <ul className={classes.list_items}>

  
      {
        units.map((item,index)=>(
          <li key={index} className={classes.list_item}>
              <NavLink to={item.path} 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.placeholder}
              </NavLink>
          </li>
        ))
      }

        
    </ul> 
    </nav>

  )
}

export default index
