import classes from "./index.module.css"

const index = (props) => {
  let content = props.content
  let date = props.date
  let likes = props.likes

  return (
    <div className={classes.tweet}>
        <div className={classes.tweet_content}>
        {content}
        </div>
        <div className={classes.tweet_stats}>
            <h5>{date}</h5>
            <h5>{likes} Likes</h5>
        </div>
    </div>
  )
}

export default index