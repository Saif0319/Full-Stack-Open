const Show = ({country, handler}) => {
    return (
      <div>
        <p>{country} <button onClick={handler}>show</button> </p> 
      </div>
    )
}

export default Show;