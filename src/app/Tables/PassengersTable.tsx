const PassengersTable = () => {
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
              <label> عدد الركاب</label>
            </th>
            <th>
              <label> بيانات التواصل</label>
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
              <span> 3 </span>
              <span>1 عوائل</span>
            </td>
            <td>
              <span> واتس : 771234567 </span>
              <span> جوال : 771234567 </span> <span> محمد احمد </span>
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
              <span> 3 </span>{" "}
            </td>
            <td>
              <span> واتس : 771234567 </span>
              <span> جوال : 771234567 </span> <span> محمد احمد </span>
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
              <span> 3 </span>
              <span>1 عوائل</span>
            </td>
            <td>
              <span> واتس : 771234567 </span>
              <span> جوال : 771234567 </span> <span> محمد احمد </span>
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
              <span> 3 </span>
              <span>1 عوائل</span>
            </td>
            <td>
              <span> واتس : 771234567 </span>
              <span> جوال : 771234567 </span> <span> محمد احمد </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PassengersTable;
