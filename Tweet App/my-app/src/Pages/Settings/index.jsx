/* eslint-disable react-hooks/rules-of-hooks */
import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import Footer from '../../Components/Footer'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../../firebase";

const index = () => {
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [old_passnord, setOld_passnord] = useState("")
    const [new_passnord, setNew_passnord] = useState("")
    const [confirm_new_password, setConfirm_new_password] = useState("")
    const [confirm_bio, setConfirm_bio] = useState(false)

    const navigate = useNavigate();
    const [userID, setUserID] = useState(null);
    const [userData, setUserData] = useState();
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const uid = user.uid;
                console.log("In Setting Page",uid)

                const db = getDatabase();
                setUserID(uid);
                const userDataRef = ref(db, "users/" + uid);
                onValue(userDataRef, (snapshot) => {
                const data = snapshot.val();
                setName(data.name);
                setBio(data.bio);
                setUserData(data);
                })

                setLoggedIn(true)

            }
            else{
                navigate("/")
                console.log("In Setiting Page User is NOT logged in!");
            }
        })
    },[])

    const submitBasicInfo = () => {
    const { followings, followers, tweets } = userData;
    console.log(followers, followings, tweets);
    const updatedUserData = {
        name,
        bio: bio,
        followers,
        followings,
        tweets,
    };

    try {
        const db = getDatabase();
        const userRef = ref(db, "users/" + userID);
        set(userRef, updatedUserData);
        setConfirm_bio(false)
      } catch (error) {
        console.log("Something went wrong!");
      }
    };



    const handlePasswords = (e) =>{
        e.preventDefault()
        setOld_passnord("")
        setNew_passnord("")
        setConfirm_new_password("")
    }

  return (
    <>
    {
        isLoggedIn && (

            <>
    <Nav/>
    <div className={classes.container}>
        <h1> Your Profile </h1>
        <form className={classes.bio_data}>
            <input className={classes.input_filed} type='name' placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <textarea className={classes.input_filed} placeholder="Your Bio" value={bio} onChange={(e)=>{setBio(e.target.value)}}></textarea>
            <input className={classes.btn} type='button' value={"Update Info"} onClick={()=>{name && bio ? setConfirm_bio(true) : setConfirm_bio(false)}}/>

            {
                confirm_bio && name && bio ? <div className={classes.confirm}>
            <h1> Are You Sure! </h1>
                <div>
                <input className={classes.btn} type='button' value={"Yes"} onClick={submitBasicInfo}/>
                <input className={classes.btn} type='button' value={"No"} onClick={()=>{setConfirm_bio(false)}}/>
                </div>
                
            </div> : ""
            }

        </form>
        <br/><br/>
        <h1>Update Password</h1>
        <div>
            <form onSubmit={(e)=>{handlePasswords(e)}} className={classes.pass}>
                <input value={old_passnord} onChange={(e)=>{setOld_passnord(e.target.value)}} className={classes.input_filed} type='password' placeholder='Old Passord'/>
                <input value={new_passnord} onChange={(e)=>{setNew_passnord(e.target.value)}} className={classes.input_filed} type='password' placeholder='New Passord'/>
                <input value={confirm_new_password} onChange={(e)=>{setConfirm_new_password(e.target.value)}} className={classes.input_filed} type='password' placeholder='Confirm New Passord'/>
                <input className={classes.btn} type='submit' value={"Change Password"} />
            </form>
        </div>
    </div>
    <Footer/>
    </>

        )
    }
    </>
  )
}

export default index