import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Show = ({names, number, onClick}) => {
  return (
    <div>
      <li>{names} {number} <button onClick={onClick}>Delete</button></li>
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(res => {
      setPersons(res.data)
    })
  }, [persons])


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


  // requests
  const baseUrl = 'http://localhost:3001/persons'

  const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }


  const remove = id => {
    axios.delete(`${baseUrl}/${id}`)
  }

  //


  const addNewName = (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    }

    const val = contains(nameObj, persons)

    if(val === false) {
      create(nameObj)
      addName(event)
    } 
    
    if (val === true) {
      alert(`${nameObj.name} already exists in phonebook`)
    }



    setNewName("")
    setNewNumber("")
  }




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
      {persons &&  persons.filter(value => {
          if(search === ''){
            return value
          } else if (value.name.toLowerCase().includes(search.toLowerCase())){
            return value
          }
          return console.log()
        }).map(n => {
          return (
        <Show names={n.name} key={n.name} number={n.number} onClick={() => remove(n.id)} />
        )
        }) }
      </ul>
    </div>
  )
}


export default App