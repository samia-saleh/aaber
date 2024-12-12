// "use client"
import Image from "next/image"
// import logo from "../Images/logo.jpg"
import logo from "../Images/logo.svg"
import { PiUser } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";
import { PiShoppingCartSimple } from "react-icons/pi";
// import { TiThMenu } from "react-icons/ti";
// import { useState } from "react";

const Nabar = () => {
    //  const[toggle,setToggle]=useState(false);
  return (
    <div className="navbar" dir="rtl">
      <div className='logoContainer'>
        <Image src={logo} alt="logo" width={148} height={87} className="logoImage" />
        {/* <div className="menu">
        <a onClick={() => setToggle(prev =>!prev)}><TiThMenu /></a>
      </div> */}
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
