// import { FaRegEdit } from "react-icons/fa";
import EditTechnical from "../Dialog/EditTechnical";
// import { AiOutlineDelete } from "react-icons/ai";
import DeletDialog from "../Dialog/DeletDialog";

const Technicals = () => {
  return (
    <div className='TableContainer'>
    <table className="ResultTable">
    <thead>
    <tr>
     <th><label> الاسم</label></th>
     <th><label>  التخصص الفني </label></th>
     <th><label>  اوقات العمل</label></th>
     <th><label>  التلفون</label></th>
     <th><label></label></th>
       </tr>
    </thead>
          <tbody>
          <tr>
          <td><span> محمد علي سالم </span></td>
          <td> <span> كهرباء </span></td>
          <td><span>  دوام كامل </span></td>
          <td><span>   777135465  </span><span> 736545864</span></td>
          <td><div className="iconContainer"><EditTechnical/> <DeletDialog/></div></td>
          </tr>
          <tr>
          <td><span>   عبدالله علي محمد </span></td>
          <td> <span> سباكة </span></td>
          <td><span>  الفترة المسائية  </span></td>
          <td><span>   777135465  </span><span> 736545864</span></td>
          <td><div className="iconContainer"><EditTechnical/> <DeletDialog /></div></td>
          </tr>
          </tbody>
        </table>
  </div>
  )
}

export default Technicals
