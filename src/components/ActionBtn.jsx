const ActionBtn = ({ text, func, type }) => {
  return (
    <button type={type} className=" text-white bg-blue-900 rounded-md py-3 self-stretch" onClick={func}>{text}</button>
  );
}
 
export default ActionBtn;