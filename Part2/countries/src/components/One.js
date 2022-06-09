const One = ({country, area, capital, flag, population , region}) => {
    return (
      <div>
        <h1>{country}</h1>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <p>Population: {population}</p>

        <div>
        <img src={flag} />
        </div>
      </div>
    )
}

export default One;