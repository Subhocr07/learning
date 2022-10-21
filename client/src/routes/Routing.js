import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AdminLogin from "../screens/auth/AdminLogin"
import React from 'react'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="auth" >
                <Route path="admin-login" element={<AdminLogin/>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default Routing
