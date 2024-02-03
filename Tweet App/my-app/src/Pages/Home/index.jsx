/* eslint-disable react-hooks/rules-of-hooks */
import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import Profile from "../../Components/Profile"
import Tweet from "../../Components/Tweet"
import Footer from "../../Components/Footer"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const index = () => {

  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userData, setUserData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserID(uid);
        console.log("In Home File: ",userID)
        setLoggedIn(true);
      } else {
        navigate("/");
        console.log("User is NOT logged in!");
      }
    });
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const userDataRef = ref(db, "users/" + userID);
    onValue(userDataRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    });
  }, [userID]);

  return (
    <>
        {
          isLoggedIn ? <>
              <Nav/>
            <div className={classes.container}>
              <Profile info={userData}/>
              {
                [1,2,3,4,5].map((item,index)=>{
                  return <Tweet key={index} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit illo. Iure exercitationem architecto repudiandae consequuntur laudantium, obcaecati possimus pariatur iste aliquid aspernatur qui esse reprehenderit quisquam odio facere tempore!" date="January 2, 2024" likes="500" />
                })
              }
            </div>
            <Footer/>
          </> : null
        }
    </>
    
  )
}

export default index