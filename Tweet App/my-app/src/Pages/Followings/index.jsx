import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import Footer from "../../Components/Footer"
import Followings from "../../Components/Followings"

let loop = [
  {name:"Sadaqat",date:"2023", handle:"KhanSadaqat"},
  {name:"Nasir",date:"2024", handle:"RazaNasir"},
  {name:"Minahi",date:"2020", handle:"KhanMiono"},
  {name:"Sharry",date:"2021", handle:"KhanSharry"},
  {name:"Ali",date:"2010", handle:"AlliKhan"},
]

const index = () => {
  return (
   <>
   <Nav/>
    <div className={classes.container}>
      <h1>Followings</h1>
      {
        loop.map((item,index)=>(
          <Followings key={index} name={item.name} date={item.date} handle={item.handle}/>
        ))
      }
    
    </div>
    
    <Footer/>
   </>
  )
}

export default index