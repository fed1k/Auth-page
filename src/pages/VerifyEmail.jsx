import ActionBtn from "../components/ActionBtn";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmailAdress = () => {

  let navigate = useNavigate()

  const codeRef1 = useRef();
  const codeRef2 = useRef();
  const codeRef3 = useRef();
  const codeRef4 = useRef();
  const codeRef5 = useRef();
  const codeRef6 = useRef();

  const array = [codeRef1,codeRef2,codeRef3,codeRef4,codeRef5,codeRef6]

  const handleChange = (e) => {
    if(e.target.previousSibling && !e.target.value){
      e.target.previousSibling.focus()
    }
    if(e.target.value){
      if(e.target.value.length > 1) e.target.value = e.target.value[0]
      if(e.target.nextSibling) e.target.nextSibling.focus()
    }
  }

  const verify = () => {
    if(codeRef1.current.value &&
       codeRef2.current.value &&
       codeRef3.current.value &&
       codeRef4.current.value &&
       codeRef5.current.value &&
       codeRef6.current.value ) {
      navigate("/new-password");
    }
  }

  return (
    <div className="container sm:max-w-sm">
      <h1 className="header-text">Verify your email address</h1>
      <p className="text-gray-500 ">We emailed you a six-digit code to <span className="text-slate-900 font-bold">name@company.com</span>. Enter the code below to confirm your email adress.</p>
      <form className="flex justify-between">
        {array.map((input, index)=>(
          <input key={index} onChange={handleChange} className="verif-code-input" type="number" ref={input}  />
        ))}
      </form>
      <ActionBtn text="Verify" func={verify} />
      <p className="text-center text-gray-500">Don’t received code?  <span className="text-blue-900 font-extrabold">Resend code</span></p>
    </div>
  );
}
 
export default VerifyEmailAdress;