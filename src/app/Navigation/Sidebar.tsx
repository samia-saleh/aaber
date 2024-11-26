import Image from "next/image"
import log from "../Images/log.jpg"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarTitel'>
      <Image src={log} alt="logo" width={48} height={45} />
      <h2>خدمات مجانية من سندباد</h2>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>بحث عن رحلة</label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label> بحث عن ركاب  </label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>  تسجيل رحلة</label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>  تسجيل راكب</label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label> تسجيل سيارة </label>
            </li>

        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>بحث عن فصيلة دم  </label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>تسجيل متبرع بالدم  </label>
            </li>
        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label> بحث عن وظيفة </label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label> تسجيل وظيفة </label>
            </li>
        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>  تسجيل خريج جامعي</label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label> تسجيل باحث عن عمل </label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label> بحث عن خريج او عامل </label>
            </li>
        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label> بحث عن فني</label>
            </li>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>  تسجيل فني</label>
            </li>

        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={log} alt="logo" width={25} height={25} /> 
            <label>  دليلك - ابحث عما تريد</label>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
