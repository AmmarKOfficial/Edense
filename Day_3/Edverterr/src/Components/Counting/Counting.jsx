import "./Counting.css"

const Counting = (props) => {
    let count = props.count
    let setCount = props.setCount
    
        function clickHandler(){
            let currentCount  = count
            currentCount++
            setCount(currentCount)
        }
    
      return (
        
        <>
        <div className="counter">
            <button className="btn" onClick={clickHandler} >Count ++</button>
            <p>This is {count}</p>
        </div>
        </>
      )
}

export default Counting

