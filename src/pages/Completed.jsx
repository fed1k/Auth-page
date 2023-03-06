import {MdOutlineDoneAll} from "react-icons/md"

const Completed = ({ finalUserData }) => {
  return (
    <>
      <h3>Email: {finalUserData.email}</h3>
      <h3>Password: {finalUserData.password}</h3>
      <MdOutlineDoneAll className="done text2xl" />
    </>
  );
}
 
export default Completed;