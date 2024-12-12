// import { FaRegEdit } from "react-icons/fa";
// import { AiOutlineDelete } from "react-icons/ai";
import EditGraduate from "../Dialog/EditGraduate";
import DeletDialog from "../Dialog/DeletDialog";
const Graduates = () => {
  return (
    <div className="TableContainer">
      <table className="ResultTable">
        <thead className="">
          <tr>
            <th>
              <label> الاسم </label>
            </th>
            <th>
              <label> سنة التخرج </label>
            </th>
            <th>
              <label> الجامعة </label>
            </th>
            <th>
              <label> الكلية </label>
            </th>
            <th>
              <label> التخصص </label>
            </th>
            <th>
              <label> العمليات</label>
            </th>
          </tr>
        </thead>

        <tbody className="Cars-PAssengers">
          <tr>
            <td>
              <span> محمد علي سالم </span>
            </td>
            <td>
              {" "}
              <span> 2022 </span>
            </td>
            <td>
              <span> جامعة حضرموت </span>
            </td>
            <td>
              <span> الهندسة </span>
            </td>
            <td>
              <span> برمجة حاسوب </span>
            </td>
            <td>
              <div className="iconContainer">
                <EditGraduate /> <DeletDialog/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span> محمد علي سالم </span>
            </td>
            <td>
              {" "}
              <span> 2022 </span>
            </td>
            <td>
              <span> جامعة حضرموت </span>
            </td>
            <td>
              <span> الهندسة </span>
            </td>
            <td>
              <span> برمجة حاسوب </span>
            </td>
            <td>
              <div className="iconContainer">
                <EditGraduate /> <DeletDialog  />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Graduates;
