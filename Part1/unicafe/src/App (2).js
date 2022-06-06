import { useState } from 'react'


const StatisticLine = ({text,value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
  )
}


const Statistics = ({good, neutral, bad}) => {
    
      if(good === 0 && neutral === 0 && bad === 0){
        return (
          <div>
            <h3>No Feedback Given</h3>
          </div>
        )
      } 

      return (
        <div>
          <table>
            <tbody>
              <StatisticLine text="good" value ={good} />
              <StatisticLine text="neutral " value ={neutral} />
              <StatisticLine text="bad" value ={bad} />
              <StatisticLine text="all" value ={good + neutral + bad} />
              <StatisticLine text="average" value ={(good - bad) / (good + neutral + bad)} />
              <StatisticLine text="positive" value ={(good) / (good + neutral + bad) * 100 } />
            </tbody>
          </table>
        </div>
      )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App