import ActionBtn from "../components/ActionBtn";
import { BiShowAlt, BiHide } from "react-icons/bi"
import { useState, useRef } from "react";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setFinalUserData }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [errors, setErrors] = useState()

  let navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const toggleVisibility = () => {
    setIsPasswordVisible(prev => prev ? false : true)
  }

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(()=> {
      setFinalUserData({email, password})
      navigate("/completed")
    })
    .catch((error)=> setErrors(error.code))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <div className="container">
      <h1 className="header-text">Login with Mail</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <div>
            <label className="text-slate-900" htmlFor="email">Email</label>
            {errors === "auth/wrong-password" && <span className="text-red-700 float-right">Wrong Password</span>}
            {errors === "auth/user-not-found" && <span className="text-red-700 float-right">User not found</span>}
          </div>
          <input className="input w-full mt-2" type="email" id="email" placeholder="name@example.com" ref={emailRef} required/>
        </div>
        <div className="relative">
          <label className="text-slate-900" htmlFor="password">Password</label>
          <input ref={passwordRef} className="input w-full mt-2 bg-transparent flex-1 outline-none" type={`${isPasswordVisible ? "text" : "password"}`} id="password" placeholder="Password" required/>
          {isPasswordVisible ? <BiHide onClick={toggleVisibility} className="w-5 h-5 absolute top-12 right-4"/> : <BiShowAlt onClick={toggleVisibility} className="w-5 h-5 absolute top-12 right-4"/>}
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex gap-2">
            <input className=" accent-blue-800 scale-125" type="checkbox" id="checkbox" />
            <label className="text-gray-500 font-extrabold" htmlFor="checkbox">Remember me</label>
          </div>
          <Link to="/password-reset"><p className="text-indigo-800 font-semibold">Forgot password?</p></Link>
        </div>
        <ActionBtn text="Login Now" type="submit"/>
      </form>
    </div>
  );
}
 
export default Login;