import React from 'react'
import { useParams } from 'react-router-dom'

const Svecw = () => {
    const student=useParams()
  return (
    <div>
        <h3  style={{color:"#d96846"}}><ul>Student Details</ul></h3>
        <div style={{marginTop:"20px",color:"green",width:"300px",border:"3px solid black",padding:"10px",borderRadius:"10px"}}>
      <h5>Registration no  : {student.studentid}</h5><br/>
      <h5>College  : SVECW</h5><br/>
      <h5>Branch : IT</h5><br/>
      </div>
      
    </div>
  )
}

export default Svecw
