import { useRef, useState } from "react";
import ActionBtn from "../components/ActionBtn"
import { useNavigate } from "react-router-dom";
const NewPassword = ({ setFinalUserData }) => {
  const [errors, setErrors] = useState()
  let newPasswordRef = useRef()
  let confirmPasswordRef = useRef()

  let navigate = useNavigate()


  const handleResetPassword = (e) => {
    e.preventDefault();
    if(newPasswordRef.current.value === confirmPasswordRef.current.value){
      setErrors()
      setFinalUserData(prev => ({email: prev.email, password: confirmPasswordRef.current.value}))
      navigate('/completed');
    }else{
      setErrors("Make sure they are same!")
    }

  }

  return (
    <div className="container gap-4 sm:max-w-sm">
      <div>
        <h1 className="header-text">Create new password</h1>
        <p className="text-gray-500 mt-1">Your new password must be different from previous used passwords.</p>
      </div>
      {errors && <p className=" text-red-600">{errors}</p>}
      <form className="flex gap-4 flex-col" onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="new-password">New Password</label>
          <input className="input w-full mt-2" type="password" id="new-password" placeholder="New password" required ref={newPasswordRef}/>
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input className="input w-full mt-2" type="password" id="confirm-password" placeholder="Confirm password" ref={confirmPasswordRef} required/>
        </div>
        <div>
          <input className="border border-gray-300" type="checkbox" name="" id="agree-terms" required />
          <label className="text-gray-600 ml-2" htmlFor="agree-terms">I’am agree to StrategyConnect <span className="text-indigo-800">Terms of Use</span> and <span className="text-indigo-800">Privacy Policy.</span></label>
        </div>
        <ActionBtn type="submit" text="Reset password"/>
      </form>
    </div>
  );
}
 
export default NewPassword;