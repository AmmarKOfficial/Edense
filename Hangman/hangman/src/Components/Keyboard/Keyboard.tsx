import classes from "./Keyboard.module.css"

type KeyProps = {
   activeLetter:string[], 
   inactiveLetters:string[], 
   addGuessedLetter: (letter:string) => void
   disabled?: boolean
}

const KEYS = [
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
   "g",
   "h",
   "i",
   "j",
   "k",
   "l",
   "m",
   "n",
   "o",
   "p",
   "q",
   "r",
   "s",
   "t",
   "u",
   "v",
   "w",
   "x",
   "y",
   "z",
 ]


export function Keyboard({activeLetter,disabled = false, inactiveLetters, addGuessedLetter} : KeyProps) {
   
   
   return <div className={classes.key__box}>
      {
         KEYS.map((ke,index)=>{
            const isActive = activeLetter.includes(ke)
            const isInactive = inactiveLetters.includes(ke)
            return(<button onClick={()=> addGuessedLetter(ke)} 
            className={`${classes.keys} ${isActive ? classes.active : ""} ${
               isInactive ? classes.inactive : ""
             }`}
             disabled={isInactive || isActive || disabled}
            key={index}>{ke}</button>
         )})
      }
   </div>
}