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
  all: number
  average: number
  positive: number
}
function Statistics({ good, neutral, bad, all, average, positive }: StatisticsProps) {
  if (all === 0) {
  return <p>No feedback given</p>
}
  return (
     
    <table>
      <tbody>
    
    <StatisticLine text="Good" value={good} />
    <StatisticLine text="Neutral" value={neutral} />
    <StatisticLine text="Bad" value={bad} />
    <StatisticLine text="All" value={all} />
    <StatisticLine text="Average" value={average} />
    <StatisticLine text="Positive" value={positive} />
      </tbody>
    </table>
  )

}

type StatisticLineProps = {
  text: string
  value: number
}
function StatisticLine({text, value}: StatisticLineProps) {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
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

const all = good + neutral + bad
const average = (good - bad) / all
const positive = (good / all) * 100

return (
  <div>
    <Heading 
    heading= "give feedback"
    />
    
   

    <Feedback 
      onGood={handleGood}
      onNeutral={handleNeutral}
      onBad={handleBad}
    /> 

    <Heading
    heading= "statistics"
    />
    <Statistics
     good={good}
     neutral={neutral}
     bad={bad}
      all={all}
      positive={positive}
      average={average}
    />
  </div>
)
}
export default App