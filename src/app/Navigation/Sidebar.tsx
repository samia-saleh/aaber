import Image from "next/image"
import log from "../Images/log.jpg"
import cloud from "../Images/cloud.svg"
import tripSearch from "../Images/trip search.svg"
import psssengers from "../Images/passengers.svg"
import tripRecord from "../Images/trip Record 2.svg"
import passengerRecord from "../Images/passenger record2.svg"
import carRecord from "../Images/car record.svg"
import searchVolnteer from "../Images/volunteer search.svg"
import recordVolnteer from "../Images/recoord Volnteer.svg"
import searchjop from "../Images/jop search.svg"
import recordjop from "../Images/jop Record.svg"
import graduate from "../Images/graduate.svg"
import workerSearch from "../Images/graduate.svg"
import workerRcored from "../Images/worker record.svg" 
import search from "../Images/search.svg" 
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarTitel'>
      <Image src={cloud} alt="logo" width={48} height={45} />
      <h2>خدمات مجانية من سندباد</h2>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={tripSearch} alt="tripSearch" width={25} height={25} /> 
            <label>بحث عن رحلة</label>
            </li>
            <li> 
            <Image src={psssengers} alt="psssengers" width={25} height={25} /> 
            <label> بحث عن ركاب  </label>
            </li>
            <li> 
            <Image src={tripRecord} alt="tripRecord" width={25} height={25} /> 
            <label>  تسجيل رحلة</label>
            </li>
            <li> 
            <Image src={passengerRecord} alt="passengerRecord" width={25} height={25} /> 
            <label>  تسجيل راكب</label>
            </li>
            <li> 
            <Image src={carRecord} alt="locarRecordgo" width={25} height={25} /> 
            <label> تسجيل سيارة </label>
            </li>

        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={searchVolnteer} alt="searchVolnteer" width={25} height={25} /> 
            <label>بحث عن فصيلة دم  </label>
            </li>
            <li> 
            <Image src={recordVolnteer} alt="recordVolnteer" width={25} height={25} /> 
            <label>تسجيل متبرع بالدم  </label>
            </li>
        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={searchjop} alt="searchjop" width={25} height={25} /> 
            <label> بحث عن وظيفة </label>
            </li>
            <li> 
            <Image src={recordjop} alt="recordjop" width={25} height={25} /> 
            <label> تسجيل وظيفة </label>
            </li>
        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={graduate} alt="graduate" width={25} height={25} /> 
            <label>  تسجيل خريج جامعي</label>
            </li>
            <li> 
            <Image src={graduate} alt="graduate" width={25} height={25} /> 
            <label> تسجيل باحث عن عمل </label>
            </li>
            <li> 
            <Image src={graduate} alt="graduate" width={25} height={25} /> 
            <label> بحث عن خريج او عامل </label>
            </li>
        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={workerSearch} alt="workerSearch" width={25} height={25} /> 
            <label> بحث عن فني</label>
            </li>
            <li> 
            <Image src={workerRcored} alt="workerRcored" width={25} height={25} /> 
            <label>  تسجيل فني</label>
            </li>

        </ul>
      </div>
      <div>
        <ul>
            <li> 
            <Image src={search} alt="search" width={25} height={25} /> 
            <label>  دليلك - ابحث عما تريد</label>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
