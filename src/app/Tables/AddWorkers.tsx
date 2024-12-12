// import { FaRegEdit } from "react-icons/fa";
// import { AiOutlineDelete } from "react-icons/ai";
import DeletDialog from "../Dialog/DeletDialog";
import EditWorker from "../Dialog/EditWorker";

const AddWorkers = () => {
  return (
    <div className='TableContainer'>

    <table className="ResultTable">
 
 <thead className="">
 <tr>
  <th><label> الاسم </label></th>
  <th><label>    العمر </label></th>
  <th><label>   العمل المطلوب </label></th>
  <th><label>  المؤهل </label></th>
  <th><label>   الخبرات العملية  </label></th>
  <th><label>  العمليات</label></th>
    </tr>
 </thead>
 
       <tbody className="text-center">
       <tr>
       <td><span> محمد علي سالم </span></td>
       <td> <span> 32 </span></td>
       <td><span>    محاسب </span></td>
       <td><span>    جامعة حضرموت    </span></td>
       <td><span> 3 سنوات في شركة بن زقر و 2 في شركة الموارد    </span></td>
       <td><div className="iconContainer"><EditWorker/> <DeletDialog/></div></td>
       </tr>
       <tr>
       <td><span>   عبدالله علي محمد </span></td>
       <td> <span> 38 </span></td>
       <td><span>    امين مستودع   </span></td>
       <td><span>   ثانوي   </span></td>
       <td><span>  امين مستودع في عدة شركات مختلفة  </span></td>
       <td><div className="iconContainer"><EditWorker/> <DeletDialog/></div></td>

       </tr>
       </tbody>
     </table>
</div>
  )
}

export default AddWorkers
