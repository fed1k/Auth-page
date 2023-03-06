import ActionBtn from "../components/ActionBtn";
import { BsLinkedin } from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebaseConfig";
const Join = ({ setFinalUserData }) => {
  let navigate = useNavigate();
  const loginWithEmail = () => {
    navigate("/login")
  }

  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setFinalUserData({email: data.user.email, password: "sorry can't show password"})
      navigate("/completed")
    }).catch(error => console.log(error))
  }

  return (
    <div className="container">
      <h1 className="text-lg font-extrabold text-slate-900">Join Strategy Connect</h1>
      <button onClick={handleGoogleSignup} className="sm:px-3 rounded-lg border-2 py-2 flex items-center justify-center gap-3"><FcGoogle className="scale-125" />Sign up with Google</button>
      <button className="rounded-lg border-2 py-2 text-center sm:px-3 flex items-center justify-center gap-3"><BsLinkedin className="scale-125 text-sky-700" />Sign up with Linkedin</button>
      <div className="flex items-center gap-7">
        <hr className="flex-1 border-gray-300"/>
        <p className="self-center">or</p>
        <hr className="flex-1 border-gray-300"/>
      </div>
      <ActionBtn text="Login with email" func={loginWithEmail} type="button"/>
    </div>
  );
}
 
export default Join; 