import React from "react"
import {useState, useEffect} from "react"
import axios from 'axios'
import SearchedCountries from "./components/SearchedCountries"


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(res => {
      setCountries(res.data)
    })
  }, [])


  const handleSeach = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }


  const showCountries = countries.filter(country => {
    if(search === "") {
      return ""
    } else if (country.name.common.toLowerCase().includes(search.toLowerCase())){
      return country
    }
    return console.log()
  })


  


  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSeach}/>
      </div>
      <ul>
      <SearchedCountries countries={showCountries} />
      </ul>
    </div>
  )
}

export default App;