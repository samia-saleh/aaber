// import { FaRegEdit } from "react-icons/fa";
// import { AiOutlineDelete } from "react-icons/ai";
import DeletDialog from "../Dialog/DeletDialog";
import EditBlood from "../Dialog/EditBlood";

const Bloods = () => {
  return (
    <div className='TableContainer'>

    <table className="ResultTable">
 
 <thead>
 <tr>
  <th><label> اسم المتبرع </label></th>
  <th><label>  المكان </label></th>
  <th><label>   الفصيلة</label></th>
  <th><label>  رقم الجوال</label></th>
  <th><label>   رقم الواتس</label></th>
  <th><label>العمليات</label></th>
    </tr>
 </thead>
 
       <tbody className="Bloods">
       <tr>
       <td><span> محمد سالم علي </span></td>
       <td> <span> المكلا </span><span> حضرموت </span> <span> اليمن </span></td>
       <td><span>    A+ </span></td>
       <td><span>   771234567  </span></td>
       <td><span> 771234567 </span></td>
       <td><div className="iconContainer"><EditBlood/> <DeletDialog /></div></td>
       </tr>
       <tr>
       <td><span> عبدالله صالح محمد </span></td>
       <td> <span> جدة </span><span> مكةالمكرمة  </span> <span> السعودية </span></td>
       <td><span> A+ </span></td>
       <td><span>    776586656  </span></td>
       <td><span> 776586656  </span></td>
       <td><div className="iconContainer"><EditBlood/> <DeletDialog /></div></td>
       </tr>
       </tbody>
     </table>
</div>
  )
}

export default Bloods
