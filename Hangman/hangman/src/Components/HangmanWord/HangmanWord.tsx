import "./HangmanWord.css"

type HangmanWordPrpos = {
   guessedLetter : string[],
   wordToGuess : string
   reveal?:boolean
}


export function HangmanWord({guessedLetter,reveal=false, wordToGuess} : HangmanWordPrpos) {


   return <div className="main">
      {
         wordToGuess.split("").map((item,index)=>{
            return <span className="letter" key={index}><span style={{color:
               !guessedLetter.includes(item) && reveal ? "red" : "black",}} className={guessedLetter.includes(item) || reveal ? "":"show"} >{item}</span></span>
         })
      }

   </div>
}