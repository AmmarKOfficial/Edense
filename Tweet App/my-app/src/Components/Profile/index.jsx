import classes from "./index.module.css"
import { useState, useEffect } from "react";

const  index = ({info}) => {

  const [userInfo, setUserInfo] = useState({
    name: "",
    followers: 0,
    followings: 0,
    bio: "",
  });

  useEffect(() => {
    if (info) {
      setUserInfo(info);
    }
  }, [info]);

  return (
    <div className={classes.profile}>
        <div className={classes.profile_cover}></div>
        <div className={classes.profile_basics}>
            <div className={classes.profile_img}> </div>
            <div className={classes.profile_data}>
                <h2 className={classes.profile_basics_name}>{userInfo.name}</h2>
                <p className={classes.profile_basics_handle}>@AmmarKOfficial</p>
            </div>
        </div>

        <div className={classes.profile_bio}>{userInfo.bio}</div>

        <div className={classes.profile_stats}>
        <div>
            <h3>Following</h3>
          <p>{userInfo.followings}</p>
        </div>
        <div>
        <h3>Followers</h3>
          <p>{userInfo.followers}</p>
        </div>

        </div>
    </div>
  )
}

export default index