/* eslint-disable react-hooks/rules-of-hooks */
import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import Profile from "../../Components/Profile"
import Tweet from "../../Components/Tweet"
import Footer from "../../Components/Footer"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useEffect, useState } from "react";
import NewTweet from "../../Components/NewTweet"


const index = () => {

  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userData, setUserData] = useState();
  const [newTweetTitle, setNewTweetTitle] = useState("");
  const [newTweetDescription, setNewTweetDescription] = useState("");
  const [tweetData, setTweetData] = useState([]);
  const [addNewTweet, setAddNewTweet] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserID(uid);
        console.log("In Home File: ", userID)
        setLoggedIn(true);
      } else {
        navigate("/");
        console.log("User is NOT logged in!");
      }
    });
  }, []);


  const sendNewTweet = (e) => {
    e.preventDefault();
    if (!newTweetTitle.trim() || !newTweetDescription.trim()) {
      alert("One of the field is empty!");
      return;
    }
    const db = getDatabase();
    const tweetRef = ref(db, "users/" + userID + "/tweets");
    const newTweetRef = push(tweetRef);
    set(newTweetRef, {
      title: newTweetTitle,
      description: newTweetDescription,
      date: new Date().getTime(),
      likes: 0,
    });
    alert("New Tweet Created!");
    setNewTweetTitle("");
    setNewTweetDescription("");
  };

  useEffect(() => {
    const db = getDatabase();
    const userDataRef = ref(db, "users/" + userID);
    onValue(userDataRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);

      if (data?.tweets) {
        const tweets = data.tweets;
        const tweetsList = [];
        for (const tweet in tweets) {
          tweetsList.push(tweets[tweet]);
        }

        setTweetData(tweetsList);
      }
    });
  }, [userID]);

  let addNewTweetHandler = () => {
    console.log("New Tweet Button Clicked")
    setAddNewTweet(!addNewTweet)
    console.log("Value Of Add New Tweet ", addNewTweet)
  }

  return (
    <>
        {
          isLoggedIn ? <>
              <Nav/>
            <div className={classes.container}>
              <Profile info={userData}/>
              <button  className={classes.btn} type="button" onClick={addNewTweetHandler}>Add New Tweet</button>
              {
                addNewTweet ? 
                <NewTweet
                sendNewTweet={sendNewTweet}
                title={newTweetTitle}
                description={newTweetDescription}
                setTitle={setNewTweetTitle}
                setDescription={setNewTweetDescription}
              /> : null
              }
              {
                tweetData.map((item,index)=>{
                  return <Tweet key={index} item={item} />
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