import React from 'react'
const Total = ({ parts }) => {
    
    const sum = parts.reduce((acc, curr) => acc += curr.exercises , 0)
    

    return (
    <h2>Total of {sum} exercises</h2>
    )
}

export default Total