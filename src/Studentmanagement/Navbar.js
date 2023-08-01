import React from 'react'
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  const st={
    marginTop:"9px",
    marginLeft:"60px"
  }
  const st1={
    textDecoration:"none",
    fontSize:"18px",
    color:'#bc5a45'
  }
  return (
    <div>
      <div style={{backgroundColor:"#d5f4e6",height:"55px",color:"white",marginTop:"10px",display:"flex"}}>
        <div style={{marginTop:"9px",marginLeft:"700px"}}>
        <NavLink to='/'style={st1}><b>Home</b></NavLink>
        </div>
        <div style={st}>
        <NavLink to='/students'style={st1}><b>Students</b></NavLink>
        </div>
        <div style={st}>
        <NavLink to='/dsh'style={st1}><b>Dashboard</b></NavLink>
        </div>
        <div style={st}>
        <NavLink to='/courses'style={st1}><b>Courses</b></NavLink>
        </div>
        <div style={st}>
        <NavLink to='/grades'style={st1}><b>Grades</b></NavLink>
        </div>
        <div style={st}>
        <NavLink to='/login'style={st1}><b>Login</b></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
