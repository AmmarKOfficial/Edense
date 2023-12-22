
import "./Listing.css"

const Listing = (props) => {
  return (
    <>
        <div className='shell'>
            <h3>{props.name}</h3>
            <h5>{props.rank}</h5>
        </div>
    </>
  )
}

export default Listing