"use client"
import { useState } from "react";
import Image from "next/image"
import cloud from "../Images/cloud.svg"
import tripSearch from "../Images/trip search.svg"
import psssengers from "../Images/passengers.svg"
// import tripRecord from "../Images/trip Record 2.svg"
import passengerRecord from "../Images/passenger record2.svg"
// import carRecord from "../Images/car record.svg"
import searchVolnteer from "../Images/volunteer search.svg"
import recordVolnteer from "../Images/recoord Volnteer.svg"
import searchjop from "../Images/jop search.svg"
import recordjop from "../Images/jop Record.svg"
import graduate from "../Images/graduate.svg"
// import workerSearch from "../Images/graduate.svg"
import workerRcored from "../Images/worker record.svg" 
import search from "../Images/search.svg" 
import Link from "next/link"
import AddTrip from "../Images/addTrip.svg"
import AddCar from '../Images/AddCar.svg'
import WorkerSearch from '../Images/Worker search.svg'
import tripSearch2 from "../Images/trip search2.svg"
import SearchPassenger2 from "../Images/Search Passenger2.svg"
import AddTrip2 from "../Images/trip Record 2.svg"
import AddCar2 from "../Images/Add car 2.svg"
import SearchBlood2 from "../Images/Search blood 2.svg"
import AddBlood2 from "../Images/Add blood 2.svg"
import SearchJop2 from "../Images/Search jop2.svg"
import Addjop2 from "../Images/Add jop 2.svg"
import Graduate2 from "../Images/Graduate2.svg"
import AddTech2 from "../Images/AddTech2.svg"
import SearchTech2 from "../Images/Search Tech2.svg"
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
// import tripActiveImage from"../Images/trip search2.svg"
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();
  const Routs={
    SearchTrips:"",
    SearchPassenger:"",
    AddTrip:"",
    AddPassenger:"",
    Cars:"",
    BloodSearch:"",
    AddBlood:"",
    SearchJop:"",
    AddJop:"",
    AddGraduate:"",
    AddWorker:"",
    SearchWorkerorGraduat:"",
    SearchTechnical:"",
    AddTechnical:"",
  }
  
  const SideBarImages={
    SearchTripsImage:tripSearch,
    // SearchTripsImage:"",
    SearchPassengerImage:psssengers,
    AddTripImage:AddTrip,
    AddPassengerImage:"",
    CarsImage:AddCar,
    BloodSearchImage:searchVolnteer,
    AddBloodImage:recordVolnteer,
    SearchJopImage:searchjop,
    AddJopImage:recordjop,
    GraduateImage:graduate,
    AddWorkerImage:graduate,
    SearchWorkerorGraduatImage:graduate,
    SearchTechnicalImage:WorkerSearch,
    AddTechnicalImage:workerRcored,
  
  }
  
  if(router =="/SearchTrip"){
    Routs.SearchTrips="Activ";
    SideBarImages.SearchTripsImage=tripSearch2
  }
  else  if(router =="/SearchPassenger"){
    Routs.SearchPassenger="Activ"
    SideBarImages.SearchPassengerImage=SearchPassenger2
  }
  else  if(router =="/AddTrip"){
  Routs.AddTrip="Activ"
  SideBarImages.AddTripImage=AddTrip2
  }
  else  if(router =="/AddPassenger"){
  Routs.AddPassenger="Activ"
  }
  else  if(router =="/Cars"){
  Routs.Cars="Activ"
  SideBarImages.CarsImage=AddCar2
  }
  else  if(router =="/BloodSearch"){
  Routs.BloodSearch="Activ"
  SideBarImages.BloodSearchImage=SearchBlood2
  }
  else  if(router =="/AddBlood"){
  Routs.AddBlood="Activ"
  SideBarImages.AddBloodImage=AddBlood2
  }
  else  if(router =="/SearchJop"){
  Routs.SearchJop="Activ"
  SideBarImages.SearchJopImage=SearchJop2
  }
  else  if(router =="/AddJop"){
  Routs.AddJop="Activ"
  SideBarImages.AddJopImage=Addjop2
  }
  else  if(router =="/AddGraduate"){
  Routs.AddGraduate="Activ"
  SideBarImages.GraduateImage=Graduate2
  }
  else  if(router =="/AddWorker"){
  Routs.AddWorker="Activ"
  SideBarImages.AddWorkerImage=Graduate2
  }
  else  if(router =="/SearchWorkerorGraduat"){
  Routs.SearchWorkerorGraduat="Activ"
  SideBarImages.SearchWorkerorGraduatImage=Graduate2
  }
  else  if(router =="/SearchTechnical"){
  Routs.SearchTechnical="Activ"
  SideBarImages.SearchTechnicalImage=SearchTech2
  
  }
  else  if(router =="/AddTechnical"){
  Routs.AddTechnical="Activ"
  SideBarImages.AddTechnicalImage=AddTech2
  }
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-24 right-0 min-h-full bg-white transition-transform transform ${
    isOpen ? "translate-x-0 w-64" : "translate-x-full"
  } lg:translate-x-0 lg:w-64 overflow-y-auto scrollbar-hide`}
      >
        <div  className='sidebar'>
    <div className='sidebarTitel'>
    <Image src={cloud} alt="logo" width={48} height={45} />
    <h2>خدمات مجانية من سندباد</h2>
    </div>
    <div>
      <ul>
          <li>
          <Link href={"/SearchTrip"} className={"Links "+ Routs.SearchTrips} ><Image src={SideBarImages.SearchTripsImage} alt="tripSearch" width={25} height={25} /> 
          <label>بحث عن رحلة</label></Link>
          </li>
          <li> 
          <Link href={"/SearchPassenger"} className={"Links "+ Routs.SearchPassenger}><Image src={ SideBarImages.SearchPassengerImage} alt="psssengers" width={25} height={25} /> 
          <label> بحث عن ركاب  </label></Link>
          </li>
          <li> 
          <Link href={"/AddTrip"} className={"Links "+Routs.AddTrip}><Image src={SideBarImages.AddTripImage} alt="tripRecord" width={25} height={25} /> 
          <label>  تسجيل رحلة</label></Link>
          </li>
          <li> 
          <Link href={"/AddPassenger"} className={"Links "+Routs.AddPassenger}><Image src={passengerRecord} alt="passengerRecord" width={25} height={25} /> 
          <label>  تسجيل راكب</label></Link>
          </li>
          <li> 
          <Link href={"/Cars"} className={"Links "+Routs.Cars}><Image src={SideBarImages.CarsImage} alt="locarRecordgo" width={25} height={25} /> 
          <label> تسجيل سيارة </label></Link>
          </li>

      </ul>
    </div>
    <div>
      <ul>
          <li> 
          <Link href={"/BloodSearch"} className={"Links "+Routs.BloodSearch}><Image src={SideBarImages.BloodSearchImage} alt="searchVolnteer" width={25} height={25} /> 
          <label>بحث عن فصيلة دم  </label></Link>
          </li>
          <li> 
          <Link href={"/AddBlood"} className={"Links "+Routs.AddBlood}><Image src={SideBarImages.AddBloodImage} alt="recordVolnteer" width={25} height={25} /> 
          <label>تسجيل متبرع بالدم  </label></Link>
          </li>
      </ul>
    </div>
    <div>
      <ul>
          <li> 
          <Link href={"SearchJop"} className={"Links "+Routs.SearchJop}><Image src={SideBarImages.SearchJopImage} alt="searchjop" width={25} height={25} /> 
          <label> بحث عن وظيفة </label></Link>
          </li>
          <li> 
          <Link href={"AddJop"} className={"Links "+Routs.AddJop}><Image src={SideBarImages.AddJopImage} alt="recordjop" width={25} height={25} /> 
          <label> تسجيل وظيفة </label></Link>
          </li>
      </ul>
    </div>
    <div>
      <ul>
          <li> 
         <Link href={"/AddGraduate"} className={"Links "+Routs.AddGraduate}>
         <Image src={SideBarImages.GraduateImage} alt="graduate" width={25} height={25} /> 
         <label>  تسجيل خريج جامعي</label></Link>
          </li>
          <li> 
          <Link href={"/AddWorker"} className={"Links "+Routs.AddWorker}><Image src={SideBarImages.AddWorkerImage} alt="graduate" width={25} height={25} /> 
          <label> تسجيل باحث عن عمل </label></Link>
          </li>
          <li> 
          <Link href={"/SearchWorkerorGraduat"} className={"Links "+Routs.SearchWorkerorGraduat}><Image src={SideBarImages.SearchWorkerorGraduatImage} alt="graduate" width={25} height={25} /> 
          <label> بحث عن خريج او عامل </label></Link>
          </li>
      </ul>
    </div>
    <div>
      <ul>
          <li> 
         <Link href={"/SearchTechnical"} className={"Links "+Routs.SearchTechnical}> <Image src={SideBarImages.SearchTechnicalImage} alt="workerSearch" width={25} height={25} /> 
         <label> بحث عن فني</label></Link>
          </li>
          <li> 
          <Link href={"/AddTechnical"} className={"Links "+Routs.AddTechnical}><Image src={SideBarImages.AddTechnicalImage} alt="workerRcored" width={25} height={25} /> 
          <label>  تسجيل فني</label></Link>
          </li>

      </ul>
    </div>
    <div>
      <ul>
          <li> 
          <Link href={""} className="Links "><Image src={search} alt="search" width={25} height={25} /> 
          <label>  دليلك - ابحث عما تريد</label></Link>
          </li>

      </ul>
    </div>
  </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 SidebarTrigger">
        {/* Toggle Button - visible only on screens smaller than lg */}
        <button
          className="m-4 p-5 rounded lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseOutline/> : <FiMenu/> }
        </button>
        {/* <div className="p-4">Main Content</div> */}
      </div>
    </div>
  );
}
