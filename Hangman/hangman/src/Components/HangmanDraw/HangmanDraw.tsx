import "./HangmanDraw.css"

const HEAD = (
   <div className="head"/>
)

const BODY = (
   <div className="body"/>
)

const RIGHT_ARM = (
   <div className="r_arm"/>
)

const LEFT_ARM = (
   <div className="l_arm"/>
)

const LEFT_LEG = (
   <div className="l_leg"/>
)

const RIGHT_LEG = (
   <div className="r_leg"/>
)
export  function HangmanDraw() {
   return <div className="box">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div className="knock"/>
      <div className="over"/>
      <div className="stand"/>
      <div className="base"/>

      
   </div>
}
