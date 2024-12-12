// import { FaRegEdit } from "react-icons/fa";
// import { AiOutlineDelete } from "react-icons/ai";
import DeletDialog from "../Dialog/DeletDialog";
import EditTrip from "../Dialog/EditTrip";
const RecordedTrips = () => {
  return (
    <div className="TableContainer">
      <table className="ResultTable">
        <thead>
          <tr>
            <th>
              <label>الرحلة من</label>
            </th>
            <th>
              <label> الرحلة الى </label>
            </th>
            <th>
              <label> تاريخ الرحلة</label>
            </th>
            <th>
              <label> نوع السيارة</label>
            </th>
            <th>
              <label> بيانات التواصل</label>
            </th>
            <th>
              <label></label>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <span> المكلا </span>
              <span> حضرموت </span> <span> اليمن </span>
            </td>
            <td>
              {" "}
              <span> جدة </span>
              <span> مكةالمكرمة </span> <span> السعودية </span>
            </td>
            <td>
              <span> الاحد 15/1/2024 </span>
              <span> 16/5/1446 </span> <span> الاحد </span>
            </td>
            <td>
              <span> فورشنر </span>
              <span>2020</span>
            </td>
            <td>
              <span> واتس : 771234567 </span>
              <span> جوال : 771234567 </span> <span> محمد احمد </span>
            </td>
            <td>
              <div className="iconContainer">
                {" "}
                <EditTrip /> <DeletDialog />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span> المكلا </span>
              <span> حضرموت </span> <span> اليمن </span>
            </td>
            <td>
              {" "}
              <span> جدة </span>
              <span> مكةالمكرمة </span> <span> السعودية </span>
            </td>
            <td>
              <span> الاحد 15/1/2024 </span>
              <span> 16/5/1446 </span> <span> الاحد </span>
            </td>
            <td>
              <span> فورشنر </span>
              <span>2020</span>
            </td>
            <td>
              <span> واتس : 771234567 </span>
              <span> جوال : 771234567 </span> <span> محمد احمد </span>
            </td>
            <td>
              <div className="iconContainer">
                {" "}
                <EditTrip /> <DeletDialog />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecordedTrips;
