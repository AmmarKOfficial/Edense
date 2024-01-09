import React from 'react'
import classes from "./index.module.css"
import Nav from "../../Components/Nav"
import { useState } from 'react'
import Footer from '../../Components/Footer'

const index = () => {
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [old_passnord, setOld_passnord] = useState("")
    const [new_passnord, setNew_passnord] = useState("")
    const [confirm_new_password, setConfirm_new_password] = useState("")
    const [confirm_bio, setConfirm_bio] = useState(false)

    const handlePasswords = (e) =>{
        e.preventDefault()
        setOld_passnord("")
        setNew_passnord("")
        setConfirm_new_password("")
    }

    const handleBio = (e) => {
        e.preventDefault()
        setConfirm_bio(false)
        setName("")
        setBio("")
        console.log(name);
        console.log(bio);
    }

  return (
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
                <input className={classes.btn} type='button' value={"Yes"} onClick={(e)=>{handleBio(e)}}/>
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

export default index