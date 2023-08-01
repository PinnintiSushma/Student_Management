import { React, createContext, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Pagenotfound from './Pagenotfound'
import Svecw from './Svecw'
import Students from './Students'
import Login from './Login'
import Dsh from './Dsh'
import Protectdashboard from './Protectdashboard'
import Courses from './Courses'
import Grades from './Grades'
export const UserContext = createContext()
const Dashboard = () => {
  const [isLogged, setIslogged] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<UserContext.Provider value={{ isLogged, setIslogged }}>
            <Login />
          </UserContext.Provider>} />
          <Route path='/dsh' element={
            <UserContext.Provider value={{ isLogged, setIslogged }}>
              <Protectdashboard>
                <Dsh />
              </Protectdashboard>
            </UserContext.Provider>
          } />
          <Route path='students' element={<Students />}>
            <Route path='SVECW/:studentid' element={<Svecw />} />
          </Route>
          <Route path='courses' element={<Courses />} />
          <Route path='grades' element={<Grades />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Dashboard
