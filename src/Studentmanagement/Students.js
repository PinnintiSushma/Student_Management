import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Students = () => {

  const Reg = [{
    id: 1,
    r1: '21b01A12E4',
  },
  {
    id: 2,
    r1: '21B01A12H6',
  },
  {
    id: 3,
    r1: '21B01A12J0',
  },
  {
    id: 4,
    r1: '21B01A12H2',
  },
  {
    id: 5,
    r1: '21B01A5423',
  },]
  const st3 = {
    marginTop: '20px',
    height: "50px",
    padding: "10px",
    border: '3px solid #b3dee5',
    marginLeft: "20px",
    marginRight: "800px",
    borderRadius: "10px",
    display: "flex",
    backgroundColor: '#b3dee5',
  }
  return (
    <div style={{ paddingTop: "35px", paddingLeft: "20px", backgroundColor: "#f2e9eb", height: '720px' }}>
      <h2>Registration numbers</h2>
      <div style={{ display: "flex" }}>
        <div>{
          Reg.map((items) => {
            return (
              <div key={items.id} style={st3}>
                <h5 style={{ color: "#ffa101", marginRight: "50px" }}>{items.r1}</h5>
                <Link to={'SVECW/' + items.r1} style={{ textDecoration: "none", fontSize: "16px", color: "#68020f" }}><b>More details</b></Link>
              </div>
            )
          })
        }
        </div>
        <div >
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Students
