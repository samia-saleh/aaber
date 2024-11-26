import Image from "next/image"
import log from "../Images/log.jpg"

const Nabar = () => {
  return (
    <div className="navbar" dir="rtl">
      <div className='logoContainer'>
        <Image src={log} alt="logo" width={148} height={87} />
      </div>
      <div className='personalInfoContainer'>
        <ul>
            <li>
            <Image src={log} alt="user" width={48} height={48} />
            </li>
            <li>
            <Image src={log} alt="wishlist" width={48} height={48} />
            </li>
            <li>
            <Image src={log} alt="cart" width={48} height={48} />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Nabar
