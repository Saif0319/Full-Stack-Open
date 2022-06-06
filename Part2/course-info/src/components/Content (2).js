import Part from "./Part"



const Content = ({ parts }) => 
  <div>
    {parts.map((parts, i) => 
    <Part part= {parts.name} exercises={parts.exercises} key={i}/>)}
  </div>
  



export default Content