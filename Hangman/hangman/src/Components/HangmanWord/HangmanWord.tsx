import "./HangmanWord.css"

export function HangmanWord() {

   const word = "test"
   const guestLetter = ["t"]

   return <div className="main">
      {
         word.split("").map((item,index)=>{
            return <span className="letter" key={index}><span className={guestLetter.includes(item)?"":"show"}>{item}</span></span>
         })
      }

   </div>
}