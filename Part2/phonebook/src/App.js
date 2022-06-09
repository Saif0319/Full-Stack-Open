import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Show = ({names, number}) => {
  return (
    <div>
      <li>{names} {number}</li>
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(res => {
      setPersons(res.data)
    })
  }, [])


  const addName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => {
    setNewNumber(event.target.value)
  }



  const contains = (obj, array) => {
    
    for (let i = 0; i < array.length; i++) {
      if (array[i].name.toLowerCase() === obj.name.toLowerCase()) {
          return true;
      }
  }

    return false;
  }



  const addNewName = (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    }

    const val = contains(nameObj, persons)

    if(val === false) {
      setPersons(persons.concat(nameObj))
      addName(event)
    } 
    
    if (val === true) {
      alert(`${nameObj.name} already exists in phonebook`)
    }

    setNewName("")
    setNewNumber("")
  }



  const showPerson = persons.filter(value => {
    if(search === ''){
      return value
    } else if (value.name.toLowerCase().includes(search.toLowerCase())){
      return value
    }
    return console.log()
  })




  const handleSearchVal = (event) => {
    setSearch(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <div>
          Filter shown with: <input value={search} onChange={handleSearchVal} />
      </div>

      <h3>Add a new person</h3>

      <form onSubmit={addNewName}>

        <div>
          Name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNewNum} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
      {showPerson.map(n => {
          return (
        <Show names={n.name} key={n.name} number={n.number}/>
        )
        }) }
      </ul>
    </div>
  )
}


export default App