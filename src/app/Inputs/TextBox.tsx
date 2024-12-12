
import { LiaSearchSolid } from "react-icons/lia";
const TextBox = ({Placeholder="",Name=""}) => {
  return (
    <div className="textBoxContainer">
      <input  type='text' placeholder={Placeholder} name={Name}/>
      <LiaSearchSolid />
    </div>
  )
}

export default TextBox
