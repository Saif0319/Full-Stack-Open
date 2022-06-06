import { useState } from 'react'


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}> {text} </button>
  )
}


const Anecdote = ({vote, text}) => {
  return (
    <div>
    <p>{text}</p>
    <p>has {vote} vote(s)</p>
    </div>
  )
}


const MostVotes = ({anecdotes, votes}) => {
  const most_votes = Math.max(...votes)
  const index = votes.indexOf(most_votes)
  const highestVote = anecdotes[index]
  
  if(most_votes === 0) {
    return (
      <p>None has been voted yet</p>
    )
  }

  return (
    <div>
      <p>{highestVote}</p>
      <p>has {most_votes} vote(s)</p>
    </div>
  )

}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  const random = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleVotes = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }


  return (
    <div>

      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={() => setSelected(random)} text={"Next Anacode"} />
      <Button onClick={() => handleVotes()} text={"Vote"}/>

      <h1>Anecdote with most votes</h1>
      <MostVotes anecdotes={anecdotes} votes={votes}/>

    </div>
    
  )
}

export default App