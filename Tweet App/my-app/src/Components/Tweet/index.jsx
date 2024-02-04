import classes from "./index.module.css"

const index = ({ item }) => {
  const { title, description, date, likes } = item;

  return (
    <div className={classes.tweet}>
        <div className={classes.tweet_content}>
        <h2 className={classes.tweet_title}>{title}</h2>{" "}
        {description}
        </div>
        <div className={classes.tweet_stats}>
            <h5>{new Date(date).getDay()}</h5>
            <h5>{likes} Likes</h5>
        </div>
    </div>
  )
}

export default index