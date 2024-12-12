// import { FaRegEdit } from "react-icons/fa";
// import { AiOutlineDelete } from "react-icons/ai";
import EditCar from "../Dialog/EditCar";
import DeletDialog from "../Dialog/DeletDialog";
const Cars = () => {
  return (
    <div className="TableContainer">
      <table className="ResultTable">
        <thead>
          <tr>
            <th>
              <label> نوع السيارة</label>
            </th>
            <th>
              <label> الموديل </label>
            </th>
            <th>
              <label> اسم السائق</label>
            </th>
            <th>
              <label> الجوال</label>
            </th>
            <th>
              <label> واتس اب</label>
            </th>
            <th>
              <label> العمليات</label>
            </th>
          </tr>
        </thead>

        <tbody className="Cars-PAssengers">
          <tr>
            <td>
              <span> هايلوكس </span>
            </td>
            <td>
              {" "}
              <span> 2020 </span>
            </td>
            <td>
              <span> محمد علي احمد </span>
            </td>
            <td>
              <span> 00967 771234567 </span>
            </td>
            <td>
              <span> 00967 771234567 </span>
            </td>
            <td>
              <div className="iconContainer">
                <EditCar /> <DeletDialog  />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span> هايلوكس </span>
            </td>
            <td>
              {" "}
              <span> 2020 </span>
            </td>
            <td>
              <span> محمد علي احمد </span>
            </td>
            <td>
              <span> 00967 771234567 </span>
            </td>
            <td>
              <span> 00967 771234567 </span>
            </td>
            <td>
              <div className="iconContainer">
                <EditCar /> <DeletDialog  />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cars;
