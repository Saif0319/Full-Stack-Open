import Show from "./Show"
import One from "./One"
import { useState } from "react"

const SearchedCountries = ({countries}) => {

  const [show, setShow] = useState(false)

const toggler = () => {
    if(show === true) {
      return (
        <div>
      <One country={countries[0].name.common} 
      region={countries[0].region}
      capital={countries[0].capital} 
      area={countries[0].area} 
      population={countries[0].population}
      flag={countries[0].flags.png}  />
      <button onClick={() => setShow(false)}>Hide</button>
      </div>
      )
    } else if (show === false) {
      return (
        <div>
          {countries.map((country) =>
        <Show country={country.name.common} key={country.name + Math.random()} handler={() => setShow(true)}/>
        )}
        </div>
      )
    }
}


    if (countries.length > 10) {
        return (
          <p>Too many matches, specify another filter</p>
        )
    } else if (countries.length === 1) {
      return (
        <div>
          <One country={countries[0].name.common} 
          region={countries[0].region}
          capital={countries[0].capital} 
          area={countries[0].area} 
          population={countries[0].population}
          flag={countries[0].flags.png}  />
        </div>
      )
    } else  {
      return (
        toggler()
      )
      }
  }

  export default SearchedCountries;