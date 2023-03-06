import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import loginPageIllustration from "../assets/splash.png"
import resetPasswordIllustration from "../assets/thinking.png"
import emailVerif from "../assets/emailVerif.png"
const IllustrationImage = () => {
  let location = useLocation();
  const [currentImg, setCurrentImg] = useState("");

  useEffect(()=>{
    switch(location.pathname){
      case "/":
      case "/login":
        setCurrentImg(loginPageIllustration)
        break
      case "/password-reset":
        setCurrentImg(resetPasswordIllustration)
        break
      case "/email-verif":
      case "/new-password":
        setCurrentImg(emailVerif)
      default:
        setCurrentImg(emailVerif)
        break
    }
  }, [location.pathname])
  
  return (
    <img className=" flex-1" src={currentImg} alt="illustration" />
  );
}
 
export default IllustrationImage;