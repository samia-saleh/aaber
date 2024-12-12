import EditJop from "../Dialog/EditJop";
import DeletDialog from "../Dialog/DeletDialog";
// import { AiOutlineDelete } from "react-icons/ai";

const Jops = () => {
  return (
    <div className="TableContainer">
      <table className="ResultTable">
        <thead className="Jops">
          <tr>
            <th>
              <label> المجال </label>
            </th>
            <th>
              <label> تاريخ النشر </label>
            </th>
            <th>
              <label> المؤهل المطلوب </label>
            </th>
            <th>
              <label> المسمى الوظيفي</label>
            </th>
            <th>
              <label> آخر تاريخ للتقديم</label>
            </th>
            <th>
              <label> العمليات</label>
            </th>
          </tr>
        </thead>

        <tbody className="Cars-PAssengers">
          <tr>
            <td>
              <span> الصحي </span>
            </td>
            <td>
              {" "}
              <span> 15/9/2025 </span>
            </td>
            <td>
              <span> بكالوريوس تمريض </span>
            </td>
            <td>
              <span> ممرض </span>
            </td>
            <td>
              <span> 15/10/2025 </span>
            </td>
            <td>
              <div className="iconContainer">
                <EditJop /> <DeletDialog />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span> التعليم </span>
            </td>
            <td>
              {" "}
              <span> 25/9/2025 </span>
            </td>
            <td>
              <span> باكلوريوس رياضيات </span>
            </td>
            <td>
              <span> مدرس متعاقد </span>
            </td>
            <td>
              <span> 25/10/2025 </span>
            </td>
            <td>
              <div className="iconContainer">
                <EditJop /> <DeletDialog />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Jops;
