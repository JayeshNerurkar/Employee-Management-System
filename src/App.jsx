import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
// localStorage.clear()

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
    
  },[])

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      const adminData = {role: 'Admin', firstName: 'Admin'}
      setUser('admin')
      setloggedInUserData(adminData)
      localStorage.setItem('loggedInUser',JSON.stringify({
        role: 'admin', 
        data: {
          firstName: 'Admin'
        }}))
    }else if(userData){
      const employee = userData && userData.find((e) => email == e.email && password == e.password)
      // console.log(employee); 
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee', data: employee}))
      }
    }else{
      alert('Invalid Credentials')
    }
  }
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard setUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard loggedInUserData={loggedInUserData} setloggedInUserData={setloggedInUserData} setUser={setUser} /> : null)}  
    </>
  )
}

export default App
