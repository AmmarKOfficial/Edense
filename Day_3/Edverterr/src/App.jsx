
import { Header, Counting, Listing} from "./Components"
import { useState } from "react";

const App = () => {

    // let count = 0;
    const [count, setCount] = useState(0)
    
    const persons = [
        {
            name: "Ammar Khan",
            rank: "Design Engineer",
            grad: true
        },
        {
            name: "Minahil Rasool",
            rank: "Graphics Designer",
            grad: false
        },
        {
            name: "Sheharyar Khan",
            rank: "Mechanicle Engineer",
            grad: false
        }
    ];

    

  return (
    <>
        <Header />
         <Counting count={count} setCount={setCount} />

        {persons.map((item, index) => {
            if(item.grad == false){
                return (<Listing key={index} name={item.name} rank={item.rank} />)
            }
            else{
                return;
            }
        
         })}
    </>
    
  )}

export default App


