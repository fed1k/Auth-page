import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import companyLogo from "./assets/Logo.png"
import IllustrationImage from './components/Illustration'
import Join from './pages/Join'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import VerifyEmailAdress from './pages/VerifyEmail'
import NewPassword from './pages/NewPassword'
import Completed from './pages/Completed'

function App() {

  const [finalUserData, setFinalUserData] = useState({email: "", password: ""})

  return (
    <div className="App flex flex-col items-center bg-slate-100 px-4 py-8 gap-10 min-h-screen sm:flex-row-reverse sm:justify-end md:justify-center">
      <div className='flex flex-col gap-10'>
        <img src={companyLogo} alt="Logo" className='self-center'/>
        <IllustrationImage />
      </div>
      <Routes>
        <Route path='/' element={<Join setFinalUserData={setFinalUserData} />} />
        <Route path='/login' element={<Login setFinalUserData={setFinalUserData} />} />
        <Route path='/password-reset' element={<ResetPassword />} />
        <Route path='/email-verif' element={<VerifyEmailAdress />} />
        <Route path='/new-password' element={<NewPassword setFinalUserData={setFinalUserData} />} />
        <Route path='/completed' element={<Completed finalUserData={finalUserData} />} />
      </Routes>
    </div>
  )
}

export default App
