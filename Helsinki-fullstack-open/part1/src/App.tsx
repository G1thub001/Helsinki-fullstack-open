import { useState } from "react"

type HeadingProps = {
  heading: string
}
function Heading({heading}: HeadingProps) {

  return <h1>{heading}</h1>

}

type ButtonProps = {
 text: string
 onClick: () => void
}
function Button({text, onClick}: ButtonProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

type FeedbackProps = {
  onGood: () => void
  onNeutral: () => void
  onBad: () => void 
  
}
function Feedback({onGood, onNeutral, onBad}: FeedbackProps) {
   
  return (
    
    <>
      <Button 
      text="good" 
      onClick={onGood} 
      />
      <Button 
      text="neutral" 
      onClick={onNeutral}
       />
      <Button
       text="bad" 
       onClick={onBad}
        />
    </>
  )


}

type StatisticsProps = {
  good: number
  neutral: number
  bad: number
}
function Statistics({ good, neutral, bad }: StatisticsProps) {
  
  return (
    <>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </>
  )

}

function App() {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

const handleGood = () => {
   setGood(good + 1)
}
const handleNeutral = () => {
  setNeutral(neutral + 1)
}
const handleBad = () => {
  setBad(bad + 1)
}

return (
  <div>
    <Heading 
    heading= "give feedback"
    />
    <Heading
    heading= "statistics"
    />
   

    <Feedback 
      onGood={handleGood}
      onNeutral={handleNeutral}
      onBad={handleBad}
    /> 
    <Statistics
     good={good}
     neutral={neutral}
     bad={bad}
    />
  </div>
)
}
export default App
  



