import { IoIosArrowDown } from "react-icons/io";
<IoIosArrowDown />
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Children } from "react";

const PrimaryDropDown = ({Trigger,children}) => {
  return (
   <div className="drop-down-container">
     <DropdownMenu >
    <DropdownMenuTrigger><div className='trigger'><label>{Trigger}</label> <IoIosArrowDown className="inline" /></div></DropdownMenuTrigger>
    <DropdownMenuContent className="w-80 flex flex-col px-0">
      <div className="DropdownContent">
      {children}
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
   </div>
  )
}

export default PrimaryDropDown
