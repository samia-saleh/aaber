import { IoMdCheckmark } from "react-icons/io";

export default function CheckboxDemo({Content=""}) {
  return (
    <div>
       <label className="checkbox-container" dir="rtl">
        
        <input type="checkbox" id="redCheckbox"/>
        <span className="checkmark"><IoMdCheckmark /></span>
    {Content}
    </label>
    </div>
  )
}
