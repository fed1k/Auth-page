import ActionBtn from "../components/ActionBtn";
import { sendPasswordResetEmail, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
const ResetPassword = () => {

  const [errors, setErrors] = useState();

  let navigate = useNavigate()
  const emailRef = useRef()
  const handleResetPasswordEmail = (e) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, emailRef.current.value)
    .then(()=> navigate("/email-verif"))
    .catch(error => setErrors(error.code))
  }

  return (
    <div className="container sm:max-w-sm">
      <h1 className="header-text">Reset your Password</h1>
      <p className="text-gray-500 ">Please enter the email associated with your account, and we'll email you a code to reset your password.</p>
      <form onSubmit={handleResetPasswordEmail} className="flex flex-col gap-5">
        <div>
          <label htmlFor="email">Email</label>
          {errors === "auth/user-not-found" && <span className=" float-right text-red-500">User not found</span>}
        </div>
        <input className="input" type="email" id="email" placeholder="Enter your email" required ref={emailRef} />
        <ActionBtn text="Reset password" type="submit"/>
        <button onClick={()=> navigate("/login")} type="button" className=" py-3 rounded-md border-blue-900 border text-blue-900 font-extrabold">Go Back</button>
      </form>
      <p className="text-gray-500 ">If you still need help, contact <span className="text-indigo-900 font-bold">StrategyConnect Support.</span></p>
    </div>
  );
}
 
export default ResetPassword;