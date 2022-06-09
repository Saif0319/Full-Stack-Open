import Show from "./Show"
import One from "./One"

const SearchedCountries = ({countries}) => {
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
          <div>
            {countries.map((country) =>
              <Show country={country.name.common} key={country.name + Math.random()}/>
            )}
          </div>
        )
    }
  }

  export default SearchedCountries;