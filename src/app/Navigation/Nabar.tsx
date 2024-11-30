import Image from "next/image"
// import logo from "../Images/logo.jpg"
import logo from "../Images/logo.svg"
import { PiUser } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";
import { PiShoppingCartSimple } from "react-icons/pi";
const Nabar = () => {
  return (
    <div className="navbar" dir="rtl">
      <div className='logooContainer'>
        <Image src={logo} alt="logo" width={148} height={87} />
      </div>
      <div className='personalInfoContainer'>
        <ul>
            <li>
            <PiUser/>
            </li>
            <li>
            <PiHeart />
            </li>
            <li>
            <PiShoppingCartSimple />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Nabar
